import { useEffect, useRef } from 'react';
import type { Certification } from '../types';

export default function Certifications() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
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

  const certifications: Certification[] = [
    {
      title: "Python for Beginners",
      issuer: "University of Moratuwa",
      inProgress: false
    },
    {
      title: "Python Programming",
      issuer: "University of Moratuwa",
      inProgress: false
    },
    {
      title: "Software Testing & Quality Assurance",
      issuer: "Udemy",
      inProgress: true
    },
    {
      title: "Full Stack Web Development",
      issuer: "Udemy",
      inProgress: true
    }
  ];

  return (
    <section id="certifications" className="section relative" ref={sectionRef}>
      <div className="text-center mb-16 reveal">
        <div className="text-accent font-mono text-xs uppercase tracking-widest mb-3">Certifications</div>
        <h2 className="text-3xl md:text-5xl font-semibold text-light">Certifications</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
        {certifications.map((cert, i) => (
          <div 
            key={i} 
            className={`reveal reveal-delay-${(i % 2) + 1} bg-surface border border-border rounded-2xl p-5 flex items-start gap-4 hover:border-accent/40 transition-all duration-300`}
          >
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 text-accent text-xl">
              🎓
            </div>
            
            <div className="flex-grow">
              <h3 className="text-light font-medium text-sm">{cert.title}</h3>
              <p className="text-dim text-xs mt-1 mb-3">{cert.issuer}</p>
              
              <div>
                {cert.inProgress ? (
                  <span className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 text-xs px-2.5 py-1 rounded-full border border-amber-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                    In Progress
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 bg-green-500/10 text-green-400 text-xs px-2.5 py-1 rounded-full border border-green-500/20">
                    ✓ Completed
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
