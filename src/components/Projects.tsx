import { useEffect, useRef } from 'react';
import type { Project } from '../types';

export default function Projects() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      name: "DiagNote",
      period: "Aug – Nov 2025",
      tag: "Healthcare",
      description: "A full-stack healthcare management platform with role-based access for doctors, patients, and lab technicians.",
      bullets: [
        "Built RESTful APIs with Java Spring Boot for appointments, prescriptions and lab reports",
        "Implemented role-based access control for three distinct user types",
        "Designed and managed relational schema in MySQL"
      ],
      tech: ["Java", "Spring Boot", "REST APIs", "MySQL", "TypeScript"]
    },
    {
      id: 2,
      name: "LearnMe",
      period: "Feb – Jun 2025",
      tag: "EdTech",
      description: "An online learning management system built for a private tuition class, with full QA coverage.",
      bullets: [
        "Performed manual testing across User Management, Courses, Assignments and Quizzes",
        "Conducted API testing with Postman — validating endpoints, status codes and error handling",
        "Automated functional tests using Selenium with Java"
      ],
      tech: ["Java", "Spring Boot", "React.js", "MySQL", "Postman", "Selenium"]
    },
    {
      id: 3,
      name: "CVortex",
      period: "2025",
      tag: "SaaS",
      description: "A full-stack applicant tracking system with JWT authentication and multi-role dashboards.",
      bullets: [
        "Built RBAC for Admin, Recruiter and Candidate roles using Spring Security + JWT",
        "Developed candidate features: job browsing, applications, resume uploads, status tracking",
        "Built recruiter dashboard for vacancy management, applicant review and application updates"
      ],
      tech: ["Java", "Spring Boot", "Spring Security", "JWT", "React", "Vite", "MySQL"]
    }
  ];

  return (
    <section id="projects" className="section relative" ref={sectionRef}>
      <div className="text-center mb-16 reveal">
        <div className="text-accent font-mono text-xs uppercase tracking-widest mb-3">Projects</div>
        <h2 className="text-3xl md:text-5xl font-semibold text-light">Things I've Built</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <div 
            key={project.id} 
            className={`reveal reveal-delay-${(i % 3) + 1} bg-surface border border-border rounded-2xl p-6 flex flex-col group hover:border-accent/50 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(124,107,255,0.12)] transition-all duration-300 cursor-none`}
          >
            <div className="flex justify-between items-center mb-4">
              <span className="bg-accent/10 text-accent text-xs font-mono px-3 py-1 rounded-full">
                {project.tag}
              </span>
              <span className="text-muted text-xs font-mono">
                {project.period}
              </span>
            </div>
            
            <h3 className="text-xl font-semibold text-light mt-4 mb-2 group-hover:text-accentGlow transition-colors">
              {project.name}
            </h3>
            
            <p className="text-dim text-sm leading-relaxed mb-4">
              {project.description}
            </p>
            
            <div className="flex-grow">
              {project.bullets.map((bullet, j) => (
                <div key={j} className="flex items-start gap-2 text-dim text-sm mb-1">
                  <span className="text-accent mt-0.5">→</span>
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-2 mt-6">
              {project.tech.map((tech, j) => (
                <span 
                  key={j} 
                  className="bg-subtle text-dim text-xs px-2.5 py-1 rounded-full font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
