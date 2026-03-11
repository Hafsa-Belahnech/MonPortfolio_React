import { Outlet, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function RootLayout() {
  const location = useLocation();

  return (
    <div className="min-h-dvh text-foreground relative font-sans flex flex-col">
      {/* Animated Background */}
      <div className="bg-blobs">
        <div className="bg-blob bg-blob-1"></div>
        <div className="bg-blob bg-blob-2"></div>
        <div className="bg-blob bg-blob-3"></div>
      </div>

      <header className="sticky top-4 z-50 mx-auto w-full max-w-5xl px-4 mb-4">
        <nav className="glass-panel flex items-center justify-between p-4 px-6 rounded-2xl">
          <NavLink to="/" className="font-bold text-xl tracking-tight text-gradient-primary">
            Portfolio<span className="text-foreground">.</span>
          </NavLink>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <NavLink to="/projects" className={({ isActive }) => isActive ? "text-primary" : "text-foreground/80 hover:text-primary transition-colors"}>Projets</NavLink>
            <NavLink to="/experience" className={({ isActive }) => isActive ? "text-primary" : "text-foreground/80 hover:text-primary transition-colors"}>Parcours</NavLink>
            <NavLink to="/education" className={({ isActive }) => isActive ? "text-primary" : "text-foreground/80 hover:text-primary transition-colors"}>Formations</NavLink>
            <NavLink to="/certifications" className={({ isActive }) => isActive ? "text-primary" : "text-foreground/80 hover:text-primary transition-colors"}>Certifications</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "text-primary" : "text-foreground/80 hover:text-primary transition-colors"}>Contact</NavLink>
          </div>
        </nav>
      </header>

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="mx-auto w-full max-w-5xl p-6 relative z-10 flex-grow"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      <footer className="py-8 text-center text-sm text-foreground/50 border-t border-white/10 mt-auto relative z-10 w-full max-w-5xl mx-auto">
        © {new Date().getFullYear()} • Hafsa Belahnech
      </footer>
    </div>
  );
}
