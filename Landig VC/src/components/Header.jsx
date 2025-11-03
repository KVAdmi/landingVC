import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Soluciones', href: '#features' },
    { name: 'Coberturas', href: '#coverages' },
    { name: 'Quiénes Somos', href: '#about-us' },
    { name: 'Resultados', href: '#benefits' },
  ];

  const handleContactClick = () => {
    window.location.href = "mailto:contacto@vitacard365.com";
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120 } },
    exit: { opacity: 0, y: -50 }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="glass-card">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            {/* Logo removed as requested */}
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-[#f26542] transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </nav>
          <button
            onClick={handleContactClick}
            className="hidden md:block bg-[#f26542] hover:bg-[#d94d2f] text-white font-bold py-2 px-6 rounded-full transition-all duration-300"
          >
            Contacto
          </button>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden glass-card mt-1"
          >
            <nav className="flex flex-col items-center space-y-4 py-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white text-lg hover:text-[#f26542] transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
              <button
                onClick={() => {
                  handleContactClick();
                  setIsMenuOpen(false);
                }}
                className="bg-[#f26542] hover:bg-[#d94d2f] text-white font-bold py-2 px-8 rounded-full transition-all duration-300 mt-4"
              >
                Contacto
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;