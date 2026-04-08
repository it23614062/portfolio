import { useEffect, useRef } from 'react'

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.reveal')
            items.forEach((item) => {
              item.classList.add('visible')
            })
          }
        })
      },
      { threshold: 0.15 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" className="section relative" ref={sectionRef}>
      <div className="reveal mx-auto max-w-2xl text-center">
        <div className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">Contact</div>
        <h2 className="mb-4 text-4xl font-semibold text-light md:text-5xl">Let&apos;s build something great</h2>

        <p className="mt-4 leading-relaxed text-dim">
          I&apos;m actively looking for QA or backend internship opportunities. If you have a role or just want to connect, my inbox is always open.
        </p>

        <a
          href="mailto:dheemani2003@gmail.com"
          aria-label="Send an email to Theertha Dheemani"
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-lg font-semibold text-bg transition-all duration-200 hover:bg-accentGlow hover:shadow-[0_0_40px_rgba(124,107,255,0.4)]"
        >
          Say Hello
        </a>

        <a
          href="/Theertha_Dheemani_CV.pdf"
          download="Theertha_Dheemani_CV.pdf"
          aria-label="Download Theertha Dheemani CV PDF"
          className="group mx-auto mt-10 flex w-full max-w-[34rem] items-center justify-between gap-4 rounded-2xl border border-border bg-surfaceHigh px-4 py-4 transition-all duration-300 hover:border-accent/60 hover:shadow-[0_0_30px_rgba(124,107,255,0.1)] sm:px-5"
        >
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
            </div>
            <div className="min-w-0 text-left">
              <p className="truncate text-sm font-medium leading-tight text-light sm:text-base">Theertha Dheemani CV</p>
              <p className="mt-0.5 text-xs text-muted sm:text-sm">PDF resume - Click to download</p>
            </div>
          </div>
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent transition-all duration-200 group-hover:bg-accent group-hover:text-bg">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </div>
        </a>

        <div className="mx-auto mt-4 grid w-full max-w-[34rem] grid-cols-1 gap-3 sm:grid-cols-3">
          <a
            href="https://github.com/it23614062"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Theertha Dheemani GitHub profile in a new tab"
            className="group flex flex-col items-center gap-2 rounded-2xl border border-border bg-surfaceHigh px-3 py-4 transition-all duration-200 hover:border-accent/50 hover:bg-surface"
          >
            <svg className="text-dim transition-colors group-hover:text-accent" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span className="text-xs text-dim transition-colors group-hover:text-accent">GitHub</span>
          </a>

          <a
            href="https://linkedin.com/in/theertha-dheemani"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Theertha Dheemani LinkedIn profile in a new tab"
            className="group flex flex-col items-center gap-2 rounded-2xl border border-border bg-surfaceHigh px-3 py-4 transition-all duration-200 hover:border-accent/50 hover:bg-surface"
          >
            <svg className="text-dim transition-colors group-hover:text-accent" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <span className="text-xs text-dim transition-colors group-hover:text-accent">LinkedIn</span>
          </a>

          <a
            href="tel:+94761778172"
            aria-label="Call Theertha Dheemani"
            className="group flex flex-col items-center gap-2 rounded-2xl border border-border bg-surfaceHigh px-3 py-4 transition-all duration-200 hover:border-accent/50 hover:bg-surface"
          >
            <svg className="text-dim transition-colors group-hover:text-accent" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span className="text-xs text-dim transition-colors group-hover:text-accent">Phone</span>
          </a>
        </div>
      </div>

      <div className="reveal reveal-delay-2 mt-20 flex flex-col items-center justify-between gap-2 border-t border-border pt-8 text-center font-mono text-xs text-muted sm:flex-row sm:text-left">
        <span>Theertha Dheemani</span>
        <span>Copyright 2026 - Built with React and TypeScript</span>
      </div>
    </section>
  )
}
