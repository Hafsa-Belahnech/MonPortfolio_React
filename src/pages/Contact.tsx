import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, ExternalLink } from "lucide-react";

export default function ContactPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="flex flex-col gap-12 pt-4 items-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4 max-w-2xl text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary">
          Contact
        </h2>
        <p className="text-white/60 text-lg leading-relaxed">
          Feel free to reach out for a professional opportunity or just to chat.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-8 w-full max-w-2xl"
      >
        <motion.div variants={item} className="glass-panel p-8 md:p-10 rounded-3xl space-y-8 flex flex-col items-center">
          <h3 className="text-2xl font-semibold text-white">My Information</h3>

          <div className="flex flex-col md:flex-row gap-8 w-full justify-center">
            <div className="flex items-center gap-4 group bg-white/5 p-4 rounded-2xl border border-white/5 hover:border-white/10 transition-colors flex-1">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-indigo-300" />
              </div>
              <div className="overflow-hidden">
                <p className="text-sm font-medium text-white/50">Email</p>
                <a href="mailto:hafsabelahnech@gmail.com" className="text-white text-base md:text-lg font-medium hover:text-primary transition-colors truncate block" title="votre.email@exemple.com">
                  h@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 group bg-white/5 p-4 rounded-2xl border border-white/5 hover:border-white/10 transition-colors flex-1">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-emerald-300" />
              </div>
              <div className="overflow-hidden">
                <p className="text-sm font-medium text-white/50">Location</p>
                <p className="text-white text-base md:text-lg font-medium truncate block">
                  Marrakech, Morocco
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div variants={item} className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          <a
            href="https://www.linkedin.com/in/hafsa-belahnech-01592b270/"
            target="_blank"
            rel="noreferrer"
            className="glass-card flex items-center justify-center sm:justify-start gap-4 p-6 text-xl rounded-2xl hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 transition-all group"
          >
            <Linkedin className="w-8 h-8 text-white group-hover:text-blue-400 transition-colors" />
            <span className="font-semibold text-white">LinkedIn</span>
            <ExternalLink className="w-5 h-5 text-white/20 sm:ml-auto group-hover:text-white/50 transition-colors" />
          </a>

          <a
            href="https://github.com/Hafsa-Belahnech"
            target="_blank"
            rel="noreferrer"
            className="glass-card flex items-center justify-center sm:justify-start gap-4 p-6 text-xl rounded-2xl hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-400/10 transition-all group"
          >
            <Github className="w-8 h-8 text-white group-hover:text-gray-400 transition-colors" />
            <span className="font-semibold text-white">GitHub</span>
            <ExternalLink className="w-5 h-5 text-white/20 sm:ml-auto group-hover:text-white/50 transition-colors" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
