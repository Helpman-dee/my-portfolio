export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  label?: string;
  verified?: boolean;
}

export interface PersonalInfo {
  name: string;
  tagline: string;
  shortBio: string;
  location: string;
  email: string;
  academicAffiliation: string;
  professionalAffiliation: string;
  titles: string[];
  socialLinks: SocialLink[];
  cvUrl: string;
}

export interface ResearchInterest {
  title: string;
  description: string;
  icon: string;
}

export interface AboutData {
  bioParagraphs: string[];
  researchPhilosophy: string;
  researchInterests: ResearchInterest[];
  keyHighlights: {
    stat: string;
    label: string;
    sublabel: string;
  }[];
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  current: boolean;
  type: 'Full-time' | 'Research' | 'Contract' | 'Volunteer' | 'Part-time';
  description: string;
  responsibilities: string[];
  technologies: string[];
  verified: boolean;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'AI & Healthcare' | 'Clinical Data Management' | 'Data Engineering' | 'Analytics & BI' | 'IT Systems';
  shortDescription: string;
  fullDescription: string;
  myContribution: string[];
  technologies: string[];
  highlights: string[];
  demoUrl?: string;
  githubUrl?: string;
  paperUrl?: string;
  featured: boolean;
  academicRelevance?: string;
  clinicalRelevance?: string;
  image?: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  myAuthorIndex: number; // 0-indexed position in author list for bolding Dare Aladeokin
  journal: string;
  year: number;
  doi?: string;
  type: 'journal' | 'conference' | 'manuscript' | 'ongoing';
  status: 'Published' | 'Under Review' | 'In Preparation' | 'Ongoing Research';
  abstract: string;
  url?: string;
  category: string;
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  skills: {
    name: string;
    level?: 'Advanced' | 'Proficient' | 'Working Knowledge';
    highlight?: boolean;
  }[];
}

export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  status: 'In Progress' | 'Completed';
  thesisOrFocus?: string;
  relevantCoursework?: string[];
  highlights?: string[];
  verified: boolean;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  credentialUrl?: string;
  category: 'Data Science' | 'Clinical Research' | 'IT & Systems' | 'Public Health';
  verified: boolean;
  verificationNote?: string;
}

export interface Achievement {
  id: string;
  title: string;
  category: 'Scholarship / Award' | 'Research / Publication' | 'Leadership / Community' | 'Hackathon / Training';
  year: string;
  institution: string;
  description: string;
  verified: boolean;
}

export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  tools: string[];
  icon: string;
}

