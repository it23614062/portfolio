import { useEffect, useRef } from 'react'
import type { SkillGroup } from '../types'

export default function Skills() {
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
      { threshold: 0.1 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const skillGroups: SkillGroup[] = [
    {
      category: 'Languages',
      icon: '01',
      skills: ['Java', 'Python', 'C'],
    },
    {
      category: 'Testing',
      icon: '02',
      skills: ['Postman', 'Swagger', 'Selenium (Java)', 'Selenium (Python)', 'Manual Testing'],
    },
    {
      category: 'Backend',
      icon: '03',
      skills: ['Spring Boot', 'REST APIs', 'Spring Security', 'JWT'],
    },
    {
      category: 'Frontend',
      icon: '04',
      skills: ['React.js', 'TypeScript', 'JavaScript', 'Vite'],
    },
    {
      category: 'Database',
      icon: '05',
      skills: ['MySQL'],
    },
    {
      category: 'Version Control',
      icon: '06',
      skills: ['Git', 'GitHub'],
    },
  ]

  return (
    <section id="skills" className="section relative isolate overflow-visible" ref={sectionRef}>
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle, #2a2a3d 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="reveal mb-16 text-center">
        <div className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">Skills and Tools</div>
        <h2 className="text-3xl font-semibold text-light md:text-5xl">My Technical Stack</h2>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <div
            key={i}
            className={`reveal reveal-delay-${(i % 3) + 1} rounded-2xl border border-border bg-surface p-5 transition-all duration-300 hover:border-accent/40 hover:bg-surfaceHigh sm:p-6`}
          >
            <div className="mb-5 flex items-center justify-between gap-3">
              <h3 className="text-lg font-medium text-light">{group.category}</h3>
              <span className="font-mono text-xs tracking-[0.2em] text-accent/70">{group.icon}</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, j) => (
                <span key={j} className="rounded-full bg-subtle px-3 py-1 text-xs text-dim">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
