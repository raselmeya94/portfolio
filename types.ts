
export interface NavLink {
  name: string;
  href: string;
}

export interface Experience {
  date: string;
  title: string;
  company: string;
  location: string;
  description: string[];
}

export interface Publication {
  title: string;
  venue: string;
  description: string;
  imageUrl: string;
}

export interface Project {
  date: string;
  title: string;
  description: string;
  githubUrl: string;
  tags: string[];
}

export interface SkillCategory {
  title: string;
  skills: { name: string; icon: JSX.Element }[];
}

export interface Certificate {
  title: string;
  issuer: string;
  url: string;
}
