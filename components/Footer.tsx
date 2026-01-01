
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-neutral-50">
      <div className="max-w-screen-md mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-300">
          © 2024 Vatistas Dimitris
        </span>
        <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-300">
          <a href="https://ollama.com" className="hover:text-black transition-colors">Ollama</a>
          <a href="#" className="hover:text-black transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
