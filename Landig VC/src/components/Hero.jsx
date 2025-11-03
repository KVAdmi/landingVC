
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const FloatingOrb = ({ size, top, left, delay, duration, color }) => {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        top,
        left,
        backgroundColor: color,
        opacity: 0.5,
        filter: 'blur(10px)',
      }}
      animate={{
        y: [0, -20, 0, 20, 0],
        x: [0, 10, 0, -10, 0],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: 'mirror',
        delay: delay,
        ease: 'easeInOut',
      }}
    />
  );
};

const Hero = () => {
  const handleDownloadClick = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
      // IMPORTANT: Replace with your actual Google Play Store URL
      window.location.href = 'https://play.google.com/store/apps/details?id=com.yourapp.package';
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      // IMPORTANT: Replace with your actual Apple App Store URL
      window.location.href = 'https://apps.apple.com/app/your-app-name/id1234567890';
    } else {
      toast({
        title: `Descarga no disponible`,
        description: "🚧 Esta función está optimizada para dispositivos móviles. En un dispositivo móvil, te redirigiría a la tienda de aplicaciones correcta. 🚀",
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-20" onContextMenu={(e) => e.preventDefault()}>
      <div className="absolute inset-0 bg-[#0d2041]"></div>
      
      <FloatingOrb size={150} top="15%" left="5%" delay={0} duration={8} color="#f26542" />
      <FloatingOrb size={80} top="70%" left="10%" delay={2} duration={10} color="#f26542" />
      <FloatingOrb size={50} top="20%" left="45%" delay={1} duration={7} color="#f26542" />
      <FloatingOrb size={120} top="50%" left="85%" delay={3} duration={12} color="#f26542" />
      <FloatingOrb size={60} top="85%" left="60%" delay={0.5} duration={9} color="#f26542" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center md:text-left"
          >
            <div className="flex flex-col items-center md:items-start gap-2">
              <div className="flex items-center gap-4">
                <p className="text-gray-300 text-lg md:text-2xl">Presentada por</p>
                <img
                  src="https://horizons-cdn.hostinger.com/d4d71dd9-e729-4342-bb05-298ddd11d3ce/203e6a77a1668c540858ff7fb4eafb93.png"
                  alt="Azisted Logo"
                  className="h-40 w-auto"
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>
              <div className="relative w-full mt-2 md:mt-4">
                <motion.img
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  src="https://horizons-cdn.hostinger.com/d4d71dd9-e729-4342-bb05-298ddd11d3ce/f3536275e8f57b492ae6fbbb9c6db9e6.png"
                  alt="VitaCard 365 Logo"
                  className="h-auto w-full max-w-lg mx-auto md:mx-0"
                  onContextMenu={(e) => e.preventDefault()}
                />
                <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-lg mx-auto md:mx-0 absolute -bottom-4 w-full">
                  Transformamos el bienestar con soluciones innovadoras para tu salud.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-6 pt-10">
              <Button
                onClick={handleDownloadClick}
                className="bg-[#f26542] hover:bg-[#d94d2f] text-white px-8 py-3 text-lg rounded-full transition-all duration-300 flex items-center justify-center"
              >
                ¡Descárgala ya!
              </Button>
              <img src="https://horizons-cdn.hostinger.com/d4d71dd9-e729-4342-bb05-298ddd11d3ce/2a670dac89d66febaddde9afe8d3e54a.png" alt="Disponible en Google Play y App Store" className="h-16 md:h-32 w-auto" onContextMenu={(e) => e.preventDefault()} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center items-center"
          >
            <div className="w-full max-w-xl md:max-w-3xl">
              <img
                src="https://horizons-cdn.hostinger.com/d4d71dd9-e729-4342-bb05-298ddd11d3ce/2b99884bcfaea46263cbcfc169f5ec16.png"
                alt="VitaCard 365 App en un teléfono"
                className="w-full h-auto"
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
