import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('');

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-bg/80 backdrop-blur-xl border-b border-border py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="w-9 h-9 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center font-mono text-accent text-sm relative z-50 cursor-pointer">
            <a href="#">TD</a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-sm transition-colors ${
                    activeSection === link.href.substring(1) ? 'text-accent' : 'text-dim hover:text-light'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <a 
              href="#contact"
              className="bg-accent/10 border border-accent/30 text-accent text-sm px-4 py-2 rounded-full hover:bg-accent hover:text-bg transition-all duration-200 animate-glow"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden z-50 relative text-light focus:outline-none w-6 h-6 flex flex-col justify-center items-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={`h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[5px]' : '-translate-y-1'}`} />
            <span className={`h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[5.5px]' : 'translate-y-1'}`} />
          </button>
          
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-x-0 top-0 z-40 bg-surface border-b border-border transition-transform duration-500 ease-in-out md:hidden ${
          isOpen ? 'translate-y-0 shadow-2xl' : '-translate-y-full'
        }`}
      >
        <div className="pt-24 pb-6 px-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-lg transition-colors ${
                activeSection === link.href.substring(1) ? 'text-accent' : 'text-light'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#contact"
            className="mt-4 bg-accent/10 border border-accent/30 text-accent font-medium text-center px-4 py-3 rounded-full hover:bg-accent hover:text-bg transition-all duration-200 animate-glow"
            onClick={() => setIsOpen(false)}
          >
            Hire Me
          </a>
        </div>
      </div>
    </>
  );
}
