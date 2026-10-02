export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  features: string[];
  algorithmDetail?: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  featured: boolean;
  category: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: string[];
}

export interface CodingStat {
  label: string;
  value: number;
  suffix: string;
  platform: string;
  icon: string;
  link?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  details?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  icon: string;
  credentialUrl?: string;
}

export interface AchievementItem {
  title: string;
  organization: string;
  type: 'award' | 'rank' | 'hackathon' | 'leadership';
  description: string;
}

export interface NavItem {
  name: string;
  href: string;
}
