
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-24">
      <div className="space-y-8">
        <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-neutral-400">Version 1.0.4 / Vatistas Dimitris</p>
        
        <h1 className="text-5xl md:text-7xl font-light tracking-tighter leading-none">
          KIPP — Kosmic Intelligence Pattern Perceptron.
        </h1>
        
        <p className="text-xl text-neutral-500 font-light max-w-xl leading-relaxed">
          A 2.7B parameter quantized perceptron designed for local execution. Direct, unfiltered, and remarkably efficient.
        </p>
        
        <div className="flex items-center gap-8 pt-4">
          <a href="#deploy" className="text-sm font-bold uppercase tracking-widest border-b-2 border-black pb-1 hover:text-neutral-500 hover:border-neutral-300 transition-all">
            Get Started
          </a>
          <a href="https://ollama.com/vatistasdim/KIPP" target="_blank" className="text-sm font-medium text-neutral-400 hover:text-black transition-colors">
            Ollama Library ↗
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
