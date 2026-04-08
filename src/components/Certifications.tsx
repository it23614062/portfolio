import { useEffect, useRef } from 'react'
import type { Certification } from '../types'

const certifications: Certification[] = [
  {
    title: 'Python for Beginners',
    issuer: 'University of Moratuwa / CODL',
    status: 'completed',
    file: '/Python_for_Beginners_E-Certificate.pdf',
  },
  {
    title: 'Python Programming',
    issuer: 'University of Moratuwa / CODL',
    status: 'completed',
    file: '/Python_Programming_E-Certificate.pdf',
  },
  {
    title: 'Software Testing & Quality Assurance',
    issuer: 'Udemy',
    status: 'inProgress',
  },
  {
    title: 'Full Stack Web Development',
    issuer: 'Udemy',
    status: 'inProgress',
  },
]

export default function Certifications() {
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
    <section id="certifications" className="section relative" ref={sectionRef}>
      <div className="reveal mb-16 text-center">
        <div className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">Certifications</div>
        <h2 className="text-3xl font-semibold text-light md:text-5xl">Certifications</h2>
      </div>

      <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 md:grid-cols-2">
        {certifications.map((cert, i) => {
          const isCompleted = cert.status === 'completed' && cert.file
          const cardClassName = `reveal reveal-delay-${(i % 2) + 1} group flex h-full items-start gap-4 rounded-2xl border border-border bg-surface p-5 transition-all duration-300 ${
            isCompleted ? 'hover:border-accent/40 hover:shadow-[0_18px_40px_rgba(124,107,255,0.12)] focus-visible:border-accent/50' : 'hover:border-border'
          }`

          const statusBadge = isCompleted ? (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-green-500/20 bg-green-500/10 px-2.5 py-1 text-xs text-green-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="m5 12 5 5L20 7" />
              </svg>
              Completed
            </span>
          ) : (
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-2.5 py-1 text-xs text-amber-400">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse"></span>
              In Progress
            </span>
          )

          const content = (
            <>
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10 12 5 2 10l10 5 10-5Z" />
                  <path d="M6 12v5c0 .55 2.69 2 6 2s6-1.45 6-2v-5" />
                </svg>
              </div>

              <div className="flex flex-grow flex-col">
                <h3 className="text-sm font-medium text-light">{cert.title}</h3>
                <p className="mb-3 mt-1 text-xs text-dim">{cert.issuer}</p>

                <div className="mt-auto flex flex-wrap items-center gap-3">
                  {statusBadge}
                  {isCompleted ? (
                    <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent transition-colors duration-200 group-hover:border-accent/50 group-hover:bg-accent/15 group-focus-visible:border-accent/50">
                      View Certificate
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17 17 7" />
                        <path d="M7 7h10v10" />
                      </svg>
                    </span>
                  ) : (
                    <span className="text-xs text-muted">Certificate coming soon</span>
                  )}
                </div>
              </div>
            </>
          )

          if (isCompleted && cert.file) {
            return (
              <a
                key={cert.title}
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${cert.title} certificate PDF in a new tab`}
                className={cardClassName}
              >
                {content}
              </a>
            )
          }

          return (
            <article key={cert.title} className={cardClassName}>
              {content}
            </article>
          )
        })}
      </div>
    </section>
  )
}
