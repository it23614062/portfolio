import { useEffect, useState } from 'react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 },
    )

    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? 'border-b border-border bg-bg/85 py-3 backdrop-blur-xl' : 'bg-transparent py-4'
        }`}
      >
        <div className="mx-auto flex w-full max-w-[1120px] items-center justify-between px-5 sm:px-6 lg:px-8">
          <a
            href="#hero"
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full border border-accent/30 bg-accent/10 font-mono text-sm text-accent transition-colors hover:border-accent hover:bg-accent/15"
          >
            TD
          </a>

          <div className="hidden items-center gap-6 md:flex lg:gap-8">
            <nav className="flex gap-5 lg:gap-6">
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
              className="rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm text-accent transition-all duration-200 hover:bg-accent hover:text-bg"
            >
              Hire Me
            </a>
          </div>

          <button
            className="relative z-50 flex h-6 w-6 flex-col items-center justify-center text-light focus:outline-none md:hidden"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={`h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? 'translate-y-[5px] rotate-45' : '-translate-y-1'}`} />
            <span className={`h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? '-translate-y-[5.5px] -rotate-45' : 'translate-y-1'}`} />
          </button>

          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        </div>
      </header>

      <div
        className={`fixed inset-x-0 top-0 z-40 border-b border-border bg-surface transition-transform duration-500 ease-in-out md:hidden ${
          isOpen ? 'translate-y-0 shadow-2xl' : '-translate-y-full'
        }`}
      >
        <div className="flex flex-col gap-4 px-6 pb-6 pt-24">
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
            className="mt-4 rounded-full border border-accent/30 bg-accent/10 px-4 py-3 text-center font-medium text-accent transition-all duration-200 hover:bg-accent hover:text-bg"
            onClick={() => setIsOpen(false)}
          >
            Hire Me
          </a>
        </div>
      </div>
    </>
  )
}
