import { useEffect, useRef } from 'react';

export default function Contact() {
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

  return (
    <section id="contact" className="section relative" ref={sectionRef}>
      <div className="max-w-2xl mx-auto text-center reveal">
        <div className="text-accent font-mono text-xs uppercase tracking-widest mb-3">Contact</div>
        <h2 className="text-4xl md:text-5xl font-semibold text-light mb-4">Let's build something great</h2>
        
        <p className="text-dim mt-4 leading-relaxed">
          I'm actively looking for QA or backend internship opportunities. If you have a role or just want to connect, my inbox is always open.
        </p>

        <a 
          href="mailto:dheemani2003@gmail.com"
          className="mt-10 inline-flex items-center gap-3 bg-accent text-bg font-semibold px-8 py-4 rounded-full hover:bg-accentGlow transition-all duration-200 hover:shadow-[0_0_40px_rgba(124,107,255,0.4)] text-lg"
        >
          Say Hello
        </a>

        <div className="grid grid-cols-3 gap-4 mt-10 max-w-sm mx-auto">
          <a 
            href="https://github.com/it23614062"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-surface border border-border rounded-2xl p-4 flex flex-col items-center gap-2 hover:border-accent/50 transition-all duration-200 text-dim hover:text-accent text-sm"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            GitHub
          </a>
          
          <a 
            href="https://www.linkedin.com/in/theertha-dheemani"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-surface border border-border rounded-2xl p-4 flex flex-col items-center gap-2 hover:border-accent/50 transition-all duration-200 text-dim hover:text-accent text-sm"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
          
          <a 
            href="tel:+94761778172"
            className="bg-surface border border-border rounded-2xl p-4 flex flex-col items-center gap-2 hover:border-accent/50 transition-all duration-200 text-dim hover:text-accent text-sm"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.87 12 19.79 19.79 0 0 1 1.75 3.35 2 2 0 0 1 3.72 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.69a16 16 0 0 0 6 6l1.06-1.06a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.72 16z" />
            </svg>
            Phone
          </a>
        </div>
      </div>

      <div className="mt-24 pt-8 border-t border-border flex justify-between items-center text-muted text-xs font-mono reveal reveal-delay-2">
        <span>Theertha Dheemani</span>
        <span>© 2025 — Built with React & TypeScript</span>
      </div>
    </section>
  );
}
