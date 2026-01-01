
import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Specs from './components/Specs';
import Personality from './components/Personality';
import ChatPreview from './components/ChatPreview';
import Terminal from './components/Terminal';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white font-light">
      <main className="max-w-screen-sm mx-auto px-8 pt-32 pb-40 space-y-32">
        <header className="flex items-center gap-2 mb-20 reveal">
          <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
          <span className="text-[10px] font-bold uppercase tracking-[0.4em]">KIPP System</span>
        </header>

        <div className="reveal">
          <Hero />
        </div>
        
        <div className="space-y-24">
          <section className="reveal">
            <Specs />
          </section>

          <section className="reveal">
            <Personality />
          </section>

          <section className="reveal">
            <ChatPreview />
          </section>

          <section className="pt-12 reveal">
            <Terminal />
          </section>
        </div>

        <div className="reveal">
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default App;
