import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <section id="about-us" className="py-24 relative overflow-hidden bg-[#0d2041]">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Quiénes Somos
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            La experiencia y solidez que respaldan tu bienestar.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-3xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <img
                src="https://horizons-cdn.hostinger.com/d4d71dd9-e729-4342-bb05-298ddd11d3ce/203e6a77a1668c540858ff7fb4eafb93.png"
                alt="Azisted Logo"
                className="h-64 w-auto"
                onContextMenu={(e) => e.preventDefault()}
              />
            </motion.div>
            <div className="md:col-span-2">
              <p className="text-gray-300 leading-relaxed mb-4">
                Con más de 20 años de experiencia, Azisted es líder en soluciones de asistencia y salud en Latinoamérica, protegiendo a miles de personas. Nuestra misión es brindar tranquilidad y bienestar a través de la innovación y un servicio de excelencia, al alcance de todos.
              </p>
              <p className="text-gray-300 leading-relaxed">
                VitaCard 365 es el resultado de esta trayectoria, un producto diseñada para familias y empresas que buscan su tranquilidad. Combinamos nuestra vasta experiencia con tecnología de punta para revolucionar el acceso a la salud y el bienestar.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;