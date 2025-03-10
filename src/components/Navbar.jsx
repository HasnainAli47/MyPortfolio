import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // Icons for menu toggle

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-black text-white fixed top-0 left-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.h1 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }} 
          className="text-2xl font-bold"
        >
          Hasnain Ali
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li className="hover:text-blue-400 transition"><a href="#about">About</a></li>
          <li className="hover:text-blue-400 transition"><a href="#projects">Projects</a></li>
          <li className="hover:text-blue-400 transition"><a href="#education">Education</a></li>
          <li className="hover:text-blue-400 transition"><a href="#experience">Experience</a></li>
          <li className="hover:text-blue-400 transition"><a href="#contact">Contact</a></li>
          <li className="hover:text-blue-400 transition"><a href="#skills">Skills</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-black border-t border-gray-700 px-6 py-4"
          >
            <li className="py-2 hover:text-blue-400 transition"><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
            <li className="py-2 hover:text-blue-400 transition"><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
            <li className="py-2 hover:text-blue-400 transition"><a href="#education" onClick={() => setIsOpen(false)}>Education</a></li>
            <li className="py-2 hover:text-blue-400 transition"><a href="#experience" onClick={() => setIsOpen(false)}>Experience</a></li>
            <li className="py-2 hover:text-blue-400 transition"><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
            <li className="py-2 hover:text-blue-400 transition"><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>

          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
