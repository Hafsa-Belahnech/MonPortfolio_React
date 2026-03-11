import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

import { Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export default function Projects() {
  return (
    <section className="flex flex-col gap-10">
      <div className="space-y-4 text-center max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-gradient-primary">Projets Réalisés</h2>
        <p className="text-white/60 text-lg">
          Découvrez une sélection de mes travaux récents, alliant design moderne et performances exceptionnelles.
        </p>
      </div>
      
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((p) => (
          <motion.article
            variants={item}
            key={p.title}
            className="glass-card p-6 flex flex-col h-full group"
          >
            {/* Folder / Icon or Banner placeholder */}
            <div className="w-full h-40 bg-white/5 rounded-xl mb-6 overflow-hidden relative border border-white/5 group-hover:border-primary/30 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              {/* Here you could map p.image if it exists, for now fallback to icon */}
              <div className="h-full w-full flex items-center justify-center text-4xl text-white/20 group-hover:text-primary/50 transition-colors duration-500">
                🚀
              </div>
            </div>

            <div className="flex-grow flex flex-col">
              <h3 className="font-bold text-xl group-hover:text-primary transition-colors text-white mb-3">
                {p.title}
              </h3>
              <p className="text-sm text-white/60 leading-relaxed mb-6 flex-grow">
                {p.summary}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {p.tags.map((t) => (
                  <span 
                    key={t} 
                    className="px-2.5 py-1 text-xs font-semibold bg-primary/10 text-primary/80 border border-primary/20 rounded-md tracking-wide"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm font-semibold pt-4 border-t border-white/10">
              {p.link && (
                <a
                  className="flex items-center justify-center w-full gap-2 glass-button py-2 bg-primary/20 border-primary/30 text-white"
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalLink className="w-4 h-4" />
                  Démo Live
                </a>
              )}
              {p.repo && (
                <a
                  className="flex items-center justify-center w-full gap-2 glass-button py-2 bg-white/5 border-white/10 text-white"
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

