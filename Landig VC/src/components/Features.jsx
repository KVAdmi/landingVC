import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Clock, Globe, Smartphone, Star, HeartPulse } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: HeartPulse,
      title: 'Monitoreo en Tiempo Real',
      description: 'Seguimiento continuo de tu bienestar con tecnología de punta.'
    },
    {
      icon: Globe,
      title: 'Cobertura Nacional',
      description: 'Protección completa en todo el país.'
    },
    {
      icon: Smartphone,
      title: 'App Móvil Intuitiva',
      description: 'Acceso instantáneo a servicios de salud desde cualquier dispositivo.'
    },
    {
      icon: Clock,
      title: 'Atención 24/7',
      description: 'Soporte médico disponible las 24 horas, los 365 días del año.'
    },
    {
      icon: Star,
      title: 'Programas de Lealtad',
      description: 'Descuentos y beneficios exclusivos para ti y tu empresa.'
    },
    {
      icon: Activity,
      title: 'Implementación Rápida',
      description: 'Integración completa en menos de 48 horas sin complicaciones.'
    }
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d2041] via-[#1a3a5c] to-[#0d2041]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }} 
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Soluciones Diseñadas para ti y los tuyos.</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Tecnología de vanguardia que revoluciona la gestión de salud familiar y corporativa</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6, delay: index * 0.1 }} 
              className="glass-card glass-card-hover rounded-3xl p-8"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#f26542] to-[#d94d2f] rounded-2xl flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;