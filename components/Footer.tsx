
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="pt-24 flex flex-col gap-12">
      <div className="flex gap-12 text-[9px] font-bold uppercase tracking-[0.3em] text-neutral-300">
        <a href="https://ollama.com/vatistasdim/KIPP" target="_blank" className="hover:text-black transition-colors">Ollama Library</a>
        <a href="https://ollama.com" target="_blank" className="hover:text-black transition-colors">Install Engine</a>
      </div>
      <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-neutral-200">
        © 2024 Vatistas Dimitris — v1.0.4
      </p>
    </footer>
  );
};

export default Footer;
