
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Coverages from '@/components/Coverages';
import AppModules from '@/components/AppModules';
import AboutUs from '@/components/AboutUs';
import Benefits from '@/components/Benefits';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import CookieBanner from '@/components/CookieBanner';

function App() {
  return (
    <>
      <Helmet>
        <title>Soluciones para tu bienestar</title>
        <meta name="description" content="VitaCard 365 ofrece soluciones innovadoras de salud y bienestar para familias y empresas en todo el país." />
        <link rel="icon" type="image/png" href="https://horizons-cdn.hostinger.com/d4d71dd9-e729-4342-bb05-298ddd11d3ce/0b6416105452ff3238385f044b3578d5.png" />
      </Helmet>
      <div className="min-h-screen bg-[#0d2041]">
        <Header />
        <main>
          <Hero />
          <Features />
          <Coverages />
          <AppModules />
          <AboutUs />
          <Benefits />
          <CTA />
        </main>
        <Footer />
        <Toaster />
        <CookieBanner />
      </div>
    </>
  );
}

export default App;
