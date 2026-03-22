import { useState } from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function RootLayout() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="min-h-dvh text-foreground relative font-sans flex flex-col">
      {/* Animated Background */}
      <div className="bg-blobs">
        <div className="bg-blob bg-blob-1"></div>
        <div className="bg-blob bg-blob-2"></div>
        <div className="bg-blob bg-blob-3"></div>
      </div>

      <header className="sticky top-4 z-50 mx-auto w-full max-w-5xl px-4 mb-4">
        <nav className="glass-panel flex items-center justify-between p-4 px-6 rounded-2xl relative z-20">
          <NavLink to="/" onClick={closeMobileMenu} className="font-bold text-xl tracking-tight text-gradient-primary">
            Portfolio<span className="text-foreground">.</span>
          </NavLink>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <NavLink to="/projects" className={({ isActive }) => isActive ? "text-primary" : "text-foreground/80 hover:text-primary transition-colors"}>Projects</NavLink>
            <NavLink to="/experience" className={({ isActive }) => isActive ? "text-primary" : "text-foreground/80 hover:text-primary transition-colors"}>Experience</NavLink>
            <NavLink to="/education" className={({ isActive }) => isActive ? "text-primary" : "text-foreground/80 hover:text-primary transition-colors"}>Education</NavLink>
            <NavLink to="/certifications" className={({ isActive }) => isActive ? "text-primary" : "text-foreground/80 hover:text-primary transition-colors"}>Certifications</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "text-primary" : "text-foreground/80 hover:text-primary transition-colors"}>Contact</NavLink>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-foreground hover:text-primary transition-colors focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
               exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-background/95 backdrop-blur-2xl mt-2 overflow-hidden rounded-2xl border border-white/10 absolute left-4 right-4 z-10 shadow-2xl"
            >
              <div className="flex flex-col p-4 gap-4 text-sm font-medium">
                <NavLink to="/projects" onClick={closeMobileMenu} className={({ isActive }) => isActive ? "text-primary" : "text-foreground/80 hover:text-primary transition-colors"}>Projects</NavLink>
                <NavLink to="/experience" onClick={closeMobileMenu} className={({ isActive }) => isActive ? "text-primary" : "text-foreground/80 hover:text-primary transition-colors"}>Experience</NavLink>
                <NavLink to="/education" onClick={closeMobileMenu} className={({ isActive }) => isActive ? "text-primary" : "text-foreground/80 hover:text-primary transition-colors"}>Education</NavLink>
                <NavLink to="/certifications" onClick={closeMobileMenu} className={({ isActive }) => isActive ? "text-primary" : "text-foreground/80 hover:text-primary transition-colors"}>Certifications</NavLink>
                <NavLink to="/contact" onClick={closeMobileMenu} className={({ isActive }) => isActive ? "text-primary" : "text-foreground/80 hover:text-primary transition-colors"}>Contact</NavLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="mx-auto w-full max-w-5xl p-6 relative z-10 grow pt-8 md:pt-6"
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
