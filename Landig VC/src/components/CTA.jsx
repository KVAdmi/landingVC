
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';

const WhatsAppIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

const CTA = () => {
  const handleExpertClick = () => {
    // Always open WhatsApp for the "Hablar con un experto" button
    window.open('https://wa.me/523339453651', '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:contact@vitacard365.com';
  };

  // This function is for the separate WhatsApp icon button
  const handleWhatsAppIconClick = () => {
    window.open('https://wa.me/523339453651', '_blank');
  };

  return (
    <section className="relative py-20 bg-[#0d2041] overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          ¿Listo para transformar tu bienestar y el de los tuyos?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-gray-300 max-w-3xl mx-auto mb-10"
        >
          Únete a las empresas y familias que ya confían en VitaCard 365 para una vida más saludable y protegida.
        </motion.p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleExpertClick}
            className="bg-[#f26542] text-white font-bold py-3 px-8 rounded-full text-lg flex items-center justify-center shadow-lg hover:bg-[#e05a3a] transition-all duration-300"
          >
            <Phone className="mr-3 w-6 h-6" /> Hablar con un experto
          </motion.button>
        </div>

        <div className="flex justify-center items-center gap-8 mt-10">
          <motion.button
            whileHover={{ y: -4 }}
            whileTap={{ y: 1 }}
            onClick={handleWhatsAppIconClick}
            className="btn-3d-orange"
          >
            <WhatsAppIcon className="w-7 h-7 text-white" />
          </motion.button>
          <motion.button
            whileHover={{ y: -4 }}
            whileTap={{ y: 1 }}
            onClick={handleEmailClick}
            className="btn-3d-orange"
          >
            <Mail className="w-7 h-7 text-white" />
          </motion.button>
        </div>
      </div>

      <motion.div
        className="absolute top-1/4 left-1/4 w-24 h-24 bg-gradient-to-br from-[#f26542] to-[#ff8c6b] rounded-full opacity-30 blur-xl"
        animate={{ y: [0, 20, 0], x: [0, -20, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-[#00c6ff] to-[#0072ff] rounded-full opacity-30 blur-xl"
        animate={{ y: [0, -20, 0], x: [0, 20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-20 h-20 bg-gradient-to-br from-[#ff00cc] to-[#ff66d9] rounded-full opacity-30 blur-xl"
        animate={{ y: [0, 15, 0], x: [0, 15, 0], scale: [1, 1.3, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
};

export default CTA;
