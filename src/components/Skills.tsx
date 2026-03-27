import { useEffect, useRef } from 'react';
import type { SkillGroup } from '../types';

export default function Skills() {
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

  const skillGroups: SkillGroup[] = [
    {
      category: "Languages",
      icon: "💻",
      skills: ["Java", "Python", "C"]
    },
    {
      category: "Testing",
      icon: "🧪",
      skills: ["Postman", "Swagger", "Selenium (Java)", "Selenium (Python)", "Manual Testing"]
    },
    {
      category: "Backend",
      icon: "⚙️",
      skills: ["Spring Boot", "REST APIs", "Spring Security", "JWT"]
    },
    {
      category: "Frontend",
      icon: "🎨",
      skills: ["React.js", "TypeScript", "JavaScript", "Vite"]
    },
    {
      category: "Database",
      icon: "🗄️",
      skills: ["MySQL"]
    },
    {
      category: "Version Control",
      icon: "🔧",
      skills: ["Git", "GitHub"]
    }
  ];

  return (
    <section id="skills" className="section relative" ref={sectionRef}>
      <div className="text-center mb-16 reveal">
        <div className="text-accent font-mono text-xs uppercase tracking-widest mb-3">Skills & Tools</div>
        <h2 className="text-3xl md:text-5xl font-semibold text-light">My Technical Stack</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillGroups.map((group, i) => (
          <div 
            key={i} 
            className={`reveal reveal-delay-${(i % 3) + 1} bg-surface border border-border rounded-2xl p-6 hover:border-accent/40 transition-all duration-300 hover:bg-surfaceHigh`}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">{group.icon}</span>
              <h3 className="font-medium text-light text-lg">{group.category}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, j) => (
                <span 
                  key={j} 
                  className="bg-subtle text-dim text-xs px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
