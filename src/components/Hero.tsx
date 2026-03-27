import { useState, useEffect } from 'react';

export default function Hero() {
  const [text, setText] = useState('');
  const fullText = "Building reliable software through clean code and rigorous testing";
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative overflow-hidden section">
      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[10%] right-[-5%] w-96 h-96 rounded-full bg-accent/10 blur-3xl animate-float" />
        <div className="absolute bottom-[10%] left-[-5%] w-96 h-96 rounded-full bg-accent/10 blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="relative z-10 w-full">
        <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 text-accent text-xs font-mono mb-8 animate-fadeIn">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse block"></span>
          Available for internship opportunities
        </div>

        <div className="text-dim text-2xl font-light animate-fadeUp">Hi, I'm</div>
        <h1 className="text-5xl md:text-7xl font-semibold text-light animate-fadeUp mt-2" style={{ animationDelay: '120ms' }}>
          Theertha Dheemani
        </h1>
        <h1 className="text-5xl md:text-7xl font-semibold gradient-text animate-fadeUp mt-2" style={{ animationDelay: '240ms' }}>
          Wijethunga
        </h1>
        
        <div className="font-mono text-dim text-sm md:text-base mt-6 animate-fadeUp min-h-[24px]" style={{ animationDelay: '400ms' }}>
          {text}<span className="animate-blink text-accent font-bold">|</span>
        </div>

        <div className="flex flex-wrap gap-4 mt-10 animate-fadeUp" style={{ animationDelay: '500ms' }}>
          <a 
            href="#projects" 
            className="bg-accent text-bg font-medium px-7 py-3 rounded-full hover:bg-accentGlow transition-all duration-200 hover:shadow-[0_0_30px_rgba(124,107,255,0.4)]"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="border border-border text-dim px-7 py-3 rounded-full hover:border-accent hover:text-accent transition-all duration-200"
          >
            Get In Touch
          </a>
        </div>

        <div className="mt-20 pt-8 border-t border-border grid grid-cols-2 md:grid-cols-3 gap-8 animate-fadeUp" style={{ animationDelay: '600ms' }}>
          <div>
            <div className="text-3xl font-semibold gradient-text">3+</div>
            <div className="text-dim text-sm mt-1">Projects</div>
          </div>
          <div>
            <div className="text-3xl font-semibold gradient-text">2+</div>
            <div className="text-dim text-sm mt-1">Years learning</div>
          </div>
          <div>
            <div className="text-3xl font-semibold gradient-text">4</div>
            <div className="text-dim text-sm mt-1">Certifications</div>
          </div>
        </div>
      </div>
    </section>
  );
}
