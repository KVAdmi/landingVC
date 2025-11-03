
import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Facebook, Instagram } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const TikTokIcon = (props) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className="w-6 h-6 text-white"
    >
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.03-4.83-.95-6.46-2.98-2.2-2.73-2.75-6.25-1.42-9.36 1.11-2.59 3.12-4.49 5.63-5.29 1.23-.4 2.52-.57 3.79-.59.01-.15.04-.3.04-.43.01-1.56.01-3.12.01-4.68z" />
    </svg>
  );

const Footer = () => {
  const handleSocialClick = (platform) => {
    toast({
      title: `${platform}`,
      description: "🚧 Esta función no está implementada aún, pero puedes solicitarla en tu próximo mensaje 🚀",
    });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, platform: 'LinkedIn' },
    { icon: TikTokIcon, platform: 'TikTok' },
    { icon: Facebook, platform: 'Facebook' },
    { icon: Instagram, platform: 'Instagram' },
  ];

  return (
    <footer className="bg-[#0d2041] py-12">
      <div className="container mx-auto px-6 text-center">
        
        <div className="flex justify-center gap-4 mb-8">
          {socialLinks.map((social, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.1, y: -5 }}
              onClick={() => handleSocialClick(social.platform)}
              className="w-12 h-12 glass-card rounded-full flex items-center justify-center hover:bg-[#f26542] transition-all duration-300"
            >
              <social.icon />
            </motion.button>
          ))}
        </div>

        <div className="flex justify-center mb-8">
          <img
            src="https://horizons-cdn.hostinger.com/d4d71dd9-e729-4342-bb05-298ddd11d3ce/f3536275e8f57b492ae6fbbb9c6db9e6.png"
            alt="VitaCard 365 Logo"
            className="h-48 w-auto"
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>

        <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-sm mb-4">
              {currentYear} VitaCard 365 by Azisted. Todos los derechos reservados. Desarrollo Kódigo Vivo.
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center">
              <a className="hover:text-white underline-offset-2 hover:underline" href="/aviso-privacidad.html">Aviso de Privacidad</a>
              <span className="opacity-50">|</span>
              <a className="hover:text-white underline-offset-2 hover:underline" href="/politica-cookies.html">Política de Cookies</a>
              <span className="opacity-50">|</span>
              <a className="hover:text-white underline-offset-2 hover:underline" href="/terminos-condiciones.html">Términos y Condiciones</a>
              <span className="opacity-50">|</span>
              <a className="hover:text-white underline-offset-2 hover:underline" href="/politica-calidad.html">Política de Calidad</a>
              <span className="opacity-50">|</span>
              <a className="hover:text-white underline-offset-2 hover:underline" href="/account-deletion.html" title="Solicitar eliminación de cuenta y datos">Eliminar mi cuenta</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
