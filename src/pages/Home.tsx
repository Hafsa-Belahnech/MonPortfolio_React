import { profile } from "@/data/profile";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import profileImg from '../assets/profile.jpg';


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
} as const;

export default function Home() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="grid gap-12 md:grid-cols-2 items-center min-h-[70vh]"
    >
      <Helmet>
        <title>Portfolio </title>
        <meta
          name="description"
          content="Portfolio : SQL, Web Development, Networking, Linux Administration, UML, Java"
        />
      </Helmet>

      <div className="flex flex-col justify-center">
        <motion.div variants={item} className="inline-flex mb-4">
          <span className="glass-panel px-4 py-1.5 text-sm font-medium text-white rounded-full border border-primary/20 backdrop-blur-md">
            Available for new opportunities! ✨
          </span>
        </motion.div>

        <motion.h1 variants={item} className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4">
          Hello, I'm <br />
          <span className="text-gradient-primary">{profile.name}</span>
        </motion.h1>

        <motion.p variants={item} className="text-2xl font-medium text-white/80 mb-6">
          {profile.role}
        </motion.p>

        <motion.p variants={item} className="text-lg text-white/60 leading-relaxed mb-8 max-w-lg">
          {profile.about}
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap gap-4">
          <Link to="/projects" className="glass-button px-6 py-3 font-medium flex items-center gap-2 bg-primary/20 hover:bg-primary/30 border-primary/30 text-white">
            View my projects
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/contact" className="glass-button px-6 py-3 font-medium flex items-center gap-2">
            Contact me
          </Link>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-12 flex flex-wrap gap-3 text-sm"
          aria-label="career badges"
        >
          {['IT Bachelor\'s Student (2025)', 'Networking', 'SQL', 'Java', 'Linux', 'UML', 'React', 'Hibernate & JPA', 'Spring Boot', 'JDBC', 'Git', 'HTML/CSS'].map((badge) => (
            <span key={badge} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/70 backdrop-blur-md shadow-sm">
              {badge}
            </span>
          ))}
        </motion.div>
      </div>

      <motion.div
        variants={item}
        className="relative group w-full max-w-md mx-auto aspect-square"
      >
        <div className="absolute -inset-2 bg-white/40 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div
          className="relative h-full w-full bg-white rounded-3xl border border-white/50 overflow-hidden flex items-center justify-center shadow-sm group-hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] transition-all duration-500"
          role="profile.png"
          aria-label="profile illustration"
        >
          {/* Placeholder for an actual image or avatar */}
          <img src={profileImg} alt="Profile picture"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        </div>
      </motion.div>
    </motion.section>
  );
}
