export interface Project {
  id: number;
  name: string;
  period: string;
  description: string;
  bullets: string[];
  tech: string[];
  tag: string;
}

export interface SkillGroup {
  category: string;
  icon: string;
  skills: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  inProgress: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
}
