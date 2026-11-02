import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0b0b0b]/85 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-16">
        {/* Logo */}
        <a href="#home" className="text-2xl font-extrabold tracking-tight">
          <span className="text-yellow-400 font-bold">My Portfolio</span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-gray-400 transition-colors duration-200 hover:text-yellow-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Resume button */}


        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          className="rounded-lg border border-white/10 p-2 text-white transition hover:border-yellow-400 hover:text-yellow-400 lg:hidden"
        >
          {menuOpen ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="m18 6-12 12M6 6l12 12" />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/10 bg-[#0b0b0b] lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col px-5 py-3 sm:px-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-white/5 py-3 text-sm text-gray-300 transition hover:pl-2 hover:text-yellow-400"
                >
                  {link.name}
                </a>
              ))}

              
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
