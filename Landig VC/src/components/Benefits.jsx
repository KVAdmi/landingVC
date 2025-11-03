import React, { useEffect, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Smile, ClipboardList, Clock, Headphones } from 'lucide-react';

const AnimatedCounter = ({ to, isYears }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, to, {
        duration: 2,
        onUpdate(value) {
          setCount(Math.floor(value));
        }
      });
      return () => controls.stop();
    }
  }, [isInView, to]);

  const formatNumber = (num) => {
    if (isYears) return `+${num}`;
    return `+${new Intl.NumberFormat('es-MX').format(num)}`;
  };

  return <span ref={ref}>{formatNumber(count)}</span>;
};

const LiveClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  return <span>{time.toLocaleTimeString('es-MX')}</span>;
};

const Benefits = () => {
  const stats = [
    { icon: Smile, value: 450000, label: 'Usuarios protegidos' },
    { icon: ClipboardList, value: 112000, label: 'Solicitudes atendidas' },
    { icon: Clock, value: 16, label: 'Años de servicio', isYears: true },
    { icon: Headphones, value: 99, label: 'Clientes satisfechos', isPercentage: true },
  ];

  return (
    <section id="benefits" className="py-24 relative overflow-hidden bg-[#0d2041]">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nuestros Resultados
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Números que hablan por sí solos. El impacto real de elegir VitaCard 365.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card glass-card-hover rounded-3xl p-8 text-center flex flex-col items-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#f26542]/20 to-[#d94d2f]/20 rounded-full flex items-center justify-center mb-6 border-2 border-[#f26542]/50">
                <stat.icon className="w-10 h-10 text-[#f26542]" />
              </div>
              <p className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.isPercentage ? '99%' : <AnimatedCounter to={stat.value} isYears={stat.isYears} />}
              </p>
              {stat.isYears && <p className="text-lg text-gray-400"><LiveClock /></p>}
              <p className="text-gray-300 text-lg mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;