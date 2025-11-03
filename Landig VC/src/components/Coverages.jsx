import React from 'react';
import { motion } from 'framer-motion';
import { HeartPulse, Shield, Car, PawPrint, Dumbbell, Home, UserCheck } from 'lucide-react';

const Coverages = () => {
  const coverages = [
    { icon: HeartPulse, name: 'Asistencia Médica 24/7' },
    { icon: Shield, name: 'Asistencia Legal' },
    { icon: Car, name: 'Asistencia Vial' },
    { icon: PawPrint, name: 'Asistencia a Mascotas' },
    { icon: Dumbbell, name: 'Asistencia Fitness' },
    { icon: Home, name: 'Asistencia Hogar' },
    { icon: UserCheck, name: 'Asistencia Funeraria' },
  ];

  return (
    <section id="coverages" className="py-24 bg-[#0d2041]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Coberturas Incluidas</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Un ecosistema de asistencias diseñado para protegerte en cada momento de tu vida.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {coverages.map((coverage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card glass-card-hover rounded-3xl p-6 flex flex-col items-center justify-center text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#f26542] to-[#d94d2f] rounded-2xl flex items-center justify-center mb-4">
                <coverage.icon className="w-8 h-8 text-white" />
              </div>
              <p className="text-white font-semibold">{coverage.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coverages;