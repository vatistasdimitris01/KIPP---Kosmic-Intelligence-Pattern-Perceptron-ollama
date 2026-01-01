
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Specs from './components/Specs';
import Personality from './components/Personality';
import ChatPreview from './components/ChatPreview';
import Terminal from './components/Terminal';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <Navbar />
      
      <main className="max-w-screen-md mx-auto px-6">
        <Hero />
        
        <div className="space-y-32 pb-32">
          <section id="specs">
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-400 mb-12">Technical Specifications</h2>
            <Specs />
          </section>

          <section id="personality">
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-400 mb-12">Core Alignment</h2>
            <Personality />
          </section>

          <section id="preview">
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-400 mb-12">Sample Interactions</h2>
            <ChatPreview />
          </section>

          <section id="deploy" className="pt-12 border-t border-neutral-100">
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-400 mb-12">Local Deployment</h2>
            <Terminal />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
