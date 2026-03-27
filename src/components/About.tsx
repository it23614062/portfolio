import { useEffect, useRef } from 'react';
import type { Education } from '../types';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            const items = entry.target.querySelectorAll('.reveal');
            items.forEach((item) => {
              item.classList.add('visible');
            });
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const education: Education[] = [
    {
      institution: "SLIIT",
      degree: "BSc (Hons) Computer Science",
      period: "2023–2027"
    },
    {
      institution: "Mahinda Rajapaksha College",
      degree: "G.C.E. A/L",
      period: "2023"
    }
  ];

  return (
    <section id="about" className="section relative overflow-hidden" ref={sectionRef}>
      <div className="absolute -top-4 -left-4 font-semibold text-[8rem] text-white/[0.02] select-none pointer-events-none leading-none">
        ABOUT
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left column */}
        <div className="reveal">
          <div className="text-accent font-mono text-xs uppercase tracking-widest mb-3">About Me</div>
          <h2 className="text-3xl md:text-4xl font-semibold text-light mb-6">CS Undergrad passionate about quality & backend systems</h2>

          <div className="text-dim leading-relaxed space-y-4 mb-10">
            <p>
              I am a Computer Science undergraduate at SLIIT with a strong focus on backend development and quality assurance engineering.
            </p>
            <p>
              My journey in tech is driven by a passion for building robust, scalable systems and ensuring software reliability through rigorous testing protocols.
            </p>
            <p>
              Whether it's orchestrating a robust API or automating comprehensive test suites with Selenium, I thrive in environments that demand precision, creativity, and a relentless pursuit of engineering excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-surfaceHigh border border-border rounded-2xl p-4 flex items-center gap-3">
              <span className="text-xl">📍</span>
              <span className="text-dim text-sm">Hanwella, Sri Lanka</span>
            </div>
            <div className="bg-surfaceHigh border border-border rounded-2xl p-4 flex items-center gap-3">
              <span className="text-xl">🎓</span>
              <span className="text-dim text-sm">SLIIT</span>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="reveal reveal-delay-2">
          <div className="text-accent font-mono text-xs uppercase tracking-widest mb-6">Education</div>

          <div className="flex flex-col">
            {education.map((item, index) => (
              <div key={index} className="border-l-2 border-border pl-5 mb-8 relative last:mb-0">
                <div className="w-3 h-3 rounded-full bg-accent absolute -left-[7px] top-1"></div>
                <h3 className="text-light font-medium text-lg">{item.institution}</h3>
                <p className="text-dim text-sm mt-1">{item.degree}</p>
                <div className="font-mono text-accent text-xs mt-2">{item.period}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
