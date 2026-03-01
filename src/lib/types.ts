export interface SkillItem {
  text: string;
  level: number;
  experience: string[];
}

export interface SkillFilter {
  text: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  programming?: SkillItem[];
  web?: SkillItem[];
  infra?: SkillItem[];
  metrics?: SkillItem[];
  workflow?: SkillItem[];
  filters?: SkillFilter[];
  languages?: SkillItem[];
  observability?: SkillItem[];
  datastores?: SkillItem[];
  cloud?: SkillItem[];
}

export interface ProjectModalInfo {
  modalSub: string;
  date: string;
  role: string;
  collabs: string[];
  collabsLinks: string[];
  tech: string[];
  description: string;
  fullDescription: string;
  client: string;
}

export interface Project {
  ID: string;
  title: string;
  titleLower: string;
  subtitle: string;
  hasLink: boolean;
  link: string;
  image: string;
  hasGithub: boolean;
  github: string;
  modalInfo: ProjectModalInfo;
}

export interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  location: string;
  skills: string[];
  environment: string;
  summary: string[];
  collapse?: boolean;
}

export interface Education {
  school: string;
  program: string;
  minor?: string;
  startDate: string;
  endDate: string;
}

export interface PortfolioData {
  skills: SkillCategory[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
}
