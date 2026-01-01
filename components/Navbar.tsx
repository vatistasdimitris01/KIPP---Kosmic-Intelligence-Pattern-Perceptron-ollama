
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
      <div className="max-w-screen-md mx-auto px-6 h-20 flex justify-between items-center border-b border-neutral-50">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-black rounded-full"></div>
          <span className="font-bold text-sm tracking-[0.2em] uppercase">Kipp</span>
        </div>
        
        <div className="flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em]">
          <a href="#specs" className="hover:text-neutral-400 transition-colors">Specs</a>
          <a href="#deploy" className="hover:text-neutral-400 transition-colors">Deploy</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
