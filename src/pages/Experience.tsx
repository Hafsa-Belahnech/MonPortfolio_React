import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

// Placeholder data since we don't know the exact data structure yet.
const experiences = [
  {
    role: "Développement web : Full Stack",
    company: "FST-G",
    period: "2025 - Présent",
    description: "Création des mini-sites web connectés à une base de données sous Laravel PHP, React.js, Node.js, et des interfaces simples avec Java POO. ",
    tags: ["React", "TypeScript", "Node.js", "AWS"]
  },

  {
    role: "Projets et travaux pratiques",
    company: "FST-G",
    period: "2025 - 2026",
    description: "Conception des projets en networking, en SGBD et en développement web. Pratique des commandes Linux de bases et réalisation des diagrammes en UML ",
    tags: ["Flyers", "Publications", "Canva"]
  },

  {
    role: "Organisatrice des  évènements parascolaires",
    company: "Lycée Technique Al Khawarizmi ",
    period: "2021 - 2023",
    description: "Participation à l’organisation des assemblées d’orientation estudiantine. Coaching et animation des événements. Création des affiches publicitaires, flyers, présentations avec Canva et PowerPoint. ",
    tags: ["Flyers", "Publications", "Canva"]
  }
];

export default function Experience() {
  return (
    <section className="flex flex-col gap-10">
      <div className="space-y-4 max-w-2xl">
        <h2 className="text-4xl font-bold text-gradient-primary">Parcours & Expérience</h2>
        <p className="text-white/60 text-lg">
          Un aperçu de mon évolution professionnelle et de mes réalisations passées.
        </p>
      </div>

      <div className="relative border-l border-white/20 ml-4 md:ml-8 mt-6">
        {experiences.map((exp, index) => (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            key={index}
            className="mb-12 relative pl-8 md:pl-12"
          >
            {/* Timeline dot */}
            <div className="absolute w-12 h-12 bg-black border-2 border-primary/50 rounded-full -left-6 flex items-center justify-center top-0 shadow-[0_0_15px_rgba(var(--color-primary),0.5)]">
              <Briefcase className="w-5 h-5 text-primary" />
            </div>

            <div className="glass-card p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                <span className="glass-panel px-3 py-1 text-sm text-primary/80 font-semibold border-primary/20">
                  {exp.period}
                </span>
              </div>
              <h4 className="text-lg font-medium text-white/50 mb-4">{exp.company}</h4>
              <p className="text-white/70 leading-relaxed max-w-3xl mb-6">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-white/60">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
