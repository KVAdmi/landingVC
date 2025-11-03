import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Stethoscope, Apple, Calendar, Bot } from 'lucide-react';

const AppModules = () => {
  const modules = [
    {
      icon: Dumbbell,
      title: 'Módulo Fitness',
      description: 'Sincroniza y crea tu rutina en segundos.'
    },
    {
      icon: Stethoscope,
      title: 'Mi Chequeo',
      description: 'Registra tu historial de salud de forma segura.'
    },
    {
      icon: Apple,
      title: 'Bienestar',
      description: 'Nutrición inteligente, tips y más para una vida sana.'
    },
    {
      icon: Calendar,
      title: 'Agenda Personal',
      description: 'Registra tu actividad y recibe notificaciones.'
    },
    {
      icon: Bot,
      title: 'i-Vita',
      description: 'Tu asistente IA Médico personal, siempre contigo.'
    }
  ];

  return (
    <section id="app-modules" className="py-24 bg-gradient-to-b from-[#0d2041] via-[#1a3a5c] to-[#0d2041]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Tu Salud en la Palma de tu Mano</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explora los módulos inteligentes de nuestra app, diseñados para potenciar tu bienestar.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card glass-card-hover rounded-3xl p-8 text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#f26542] to-[#d94d2f] rounded-full flex items-center justify-center mb-6 mx-auto">
                <module.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{module.title}</h3>
              <p className="text-gray-300 leading-relaxed">{module.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppModules;