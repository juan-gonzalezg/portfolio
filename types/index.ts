export type ProjectCategory = 'web' | 'systems';

export type ProjectFilter = 'all' | ProjectCategory;

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: ProjectCategory;
  architecture: string[];
  tags: string[];
  isDeployed: boolean;
  demoUrl: string | null;
  githubUrl: string;
  browserTitle: string;
  type: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  category: string;
}