import { useEffect, useRef } from 'react'
import type { Project } from '../types'

export default function Projects() {
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

  const projects: Project[] = [
    {
      id: 1,
      name: 'DiagNote',
      period: 'Aug-Nov 2025',
      tag: 'Healthcare',
      description: 'A full-stack healthcare management platform with role-based access for doctors, patients, and lab technicians.',
      bullets: [
        'Built RESTful APIs with Java Spring Boot for appointments, prescriptions and lab reports',
        'Implemented role-based access control for three distinct user types',
        'Designed and managed relational schema in MySQL',
      ],
      tech: ['Java', 'Spring Boot', 'REST APIs', 'MySQL', 'TypeScript', 'Postman'],
    },
    {
      id: 2,
      name: 'LearnMe',
      period: 'Feb-Jun 2025',
      tag: 'EdTech',
      description: 'An online learning management system built for a private tuition class, with full QA coverage.',
      bullets: [
        'Performed manual testing across User Management, Courses, Assignments and Quizzes',
        'Conducted API testing with Postman, validating endpoints, status codes and error handling',
      ],
      tech: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'Postman'],
    },
    {
      id: 3,
      name: 'CVortex - Application Tracking System',
      period: 'Feb-Mar 2026',
      tag: 'QA Automation',
      description: 'A full-stack Application Tracking System tested through a structured QA automation approach covering authentication, role-based access, and end-to-end workflows across Admin, Recruiter, and Candidate modules.',
      bullets: [
        'Designed a QA automation approach using Selenium WebDriver, Java, TestNG, Maven, and the Page Object Model (POM)',
        'Planned automation coverage for authentication, role-based access control, and Candidate, Recruiter, and Admin workflows',
        'Included support for Extent Reports, WebDriverManager, data-driven testing with Apache POI, and optional Faker-based dynamic test data generation',
      ],
      tech: [
        'Selenium WebDriver',
        'Java',
        'TestNG',
        'Maven',
        'Page Object Model (POM)',
        'Extent Reports',
        'WebDriverManager',
        'Spring Boot',
        'JWT',
        'React',
        'Vite',
        'MySQL',
      ],
    },
  ]

  return (
    <section id="projects" className="section relative" ref={sectionRef}>
      <div className="reveal mb-16 text-center">
        <div className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">Projects</div>
        <h2 className="text-3xl font-semibold text-light md:text-5xl">Things I&apos;ve Built</h2>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, i) => (
          <div
            key={project.id}
            className={`reveal reveal-delay-${(i % 3) + 1} group relative isolate flex h-full flex-col overflow-visible rounded-2xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-2 hover:border-accent/50 hover:shadow-[0_20px_60px_rgba(124,107,255,0.12)] before:absolute before:inset-x-0 before:top-0 before:h-px before:rounded-t-[inherit] before:bg-gradient-to-r before:from-transparent before:via-accent/50 before:to-transparent before:opacity-0 before:transition-opacity group-hover:before:opacity-100 sm:p-6`}
          >
            <div className="mb-4 flex items-start justify-between gap-3">
              <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-mono text-accent">
                {project.tag}
              </span>
              <div className="flex flex-col items-end gap-1 text-right sm:gap-2">
                <span className="text-xs font-mono text-muted">{project.period}</span>
                <span className="text-xs font-mono text-muted">#{String(i + 1).padStart(2, '0')}</span>
              </div>
            </div>

            <h3 className="mt-2 text-xl font-semibold text-light transition-colors group-hover:text-accentGlow">
              {project.name}
            </h3>

            <p className="mb-5 mt-2 text-sm leading-relaxed text-dim">
              {project.description}
            </p>

            <div className="flex-grow">
              {project.bullets.map((bullet, j) => (
                <div key={j} className="mb-2 flex items-start gap-2 text-sm text-dim last:mb-0">
                  <span className="mt-0.5 text-accent">-&gt;</span>
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((tech, j) => (
                <span key={j} className="rounded-full bg-subtle px-2.5 py-1 text-xs font-mono text-dim">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
