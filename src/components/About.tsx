import { useEffect, useRef } from 'react'
import type { Education } from '../types'

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
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

  const education: Education[] = [
    {
      institution: 'SLIIT',
      degree: 'BSc (Hons) Computer Science',
      period: '2023-2027',
    },
    {
      institution: 'Mahinda Rajapaksha College',
      degree: 'G.C.E. A/L',
      period: '2023',
    },
  ]

  return (
    <section id="about" className="section relative isolate overflow-visible" ref={sectionRef}>
      <div className="display-text-safe pointer-events-none absolute -left-3 top-2 hidden select-none font-display text-[6rem] font-semibold text-white/[0.02] lg:block xl:text-[8rem]">
        ABOUT
      </div>

      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
        <div className="reveal">
          <div className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">About Me</div>
          <h2 className="mb-5 text-3xl font-semibold text-light md:text-4xl">
            Computer Science Undergrad passionate about  Quality Assurance
          </h2>

          <div className="mb-8 space-y-4 leading-relaxed text-dim">
            <p>
              Motivated 3rd year Computer Science undergraduate (Honours) at SLIIT with practical experience in manual testing, API
testing, Selenium automation, and full-stack development. Strong understanding of OOP concepts, SDLC, and STLC, with
skills in test case creation, defect reporting, and software quality validation. Experienced in Agile Scrum environments and
Jira-based workflow collaboration. Seeking a Quality Assurance Internship to apply testing and problem-solving skills in
delivering reliable, high-quality software
            </p>
            
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-2xl border border-border bg-surfaceHigh p-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21s-6-5.33-6-11a6 6 0 1 1 12 0c0 5.67-6 11-6 11z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </span>
              <span className="text-sm text-dim">Hanwella, Sri Lanka</span>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-border bg-surfaceHigh p-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10 12 5 2 10l10 5 10-5Z" />
                  <path d="M6 12v5c0 .55 2.69 2 6 2s6-1.45 6-2v-5" />
                </svg>
              </span>
              <span className="text-sm text-dim">SLIIT</span>
            </div>
          </div>
        </div>

        <div className="reveal reveal-delay-2">
          <div className="mb-6 font-mono text-xs uppercase tracking-widest text-accent">Education</div>

          <div className="rounded-3xl border border-border bg-surface/80 p-6 sm:p-7">
            {education.map((item, index) => (
              <div key={index} className="relative mb-8 border-l-2 border-border pl-5 last:mb-0">
                <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-accent"></div>
                <h3 className="text-lg font-medium text-light">{item.institution}</h3>
                <p className="mt-1 text-sm text-dim">{item.degree}</p>
                <div className="mt-2 font-mono text-xs text-accent">{item.period}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
