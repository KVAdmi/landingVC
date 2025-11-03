import React, { useEffect, useState } from 'react';

const LS_KEY = 'cookie-consent-v1';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(LS_KEY);
      if (!saved) setVisible(true);
    } catch {}
  }, []);

  const setChoice = (value) => {
    try {
      localStorage.setItem(LS_KEY, JSON.stringify({ value, at: Date.now() }));
    } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="mx-auto max-w-5xl m-4 rounded-lg glass-card p-4">
        <div className="flex flex-col md:flex-row md:items-center gap-3">
          <p className="text-sm text-white/90">
            Usamos cookies para mejorar tu experiencia y analizar el uso del sitio. Consulta nuestra{' '}
            <a className="underline hover:text-white" href="/politica-cookies.html" target="_blank" rel="noreferrer">Política de Cookies</a>.
          </p>
          <div className="flex gap-2 md:ml-auto">
            <button onClick={() => setChoice('reject')} className="px-3 py-2 rounded-md bg-white/10 hover:bg-white/20 text-sm">Rechazar</button>
            <button onClick={() => setChoice('accept')} className="px-3 py-2 rounded-md bg-[#f26542] hover:bg-[#e45635] text-white text-sm">Aceptar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
