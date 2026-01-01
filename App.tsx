
import React from 'react';
import Hero from './components/Hero';
import Specs from './components/Specs';
import Personality from './components/Personality';
import ChatPreview from './components/ChatPreview';
import Terminal from './components/Terminal';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white font-light">
      <main className="max-w-screen-sm mx-auto px-8 pt-32 pb-40 space-y-32">
        <header className="flex items-center gap-2 mb-20">
          <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
          <span className="text-[10px] font-bold uppercase tracking-[0.4em]">KIPP System</span>
        </header>

        <Hero />
        
        <div className="space-y-24">
          <section>
            <Specs />
          </section>

          <section>
            <Personality />
          </section>

          <section>
            <ChatPreview />
          </section>

          <section className="pt-12">
            <Terminal />
          </section>
        </div>

        <Footer />
      </main>
    </div>
  );
};

export default App;
