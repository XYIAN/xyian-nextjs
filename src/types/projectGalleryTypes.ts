export interface ProjectModel {
    id: number;
    title: string;
    imgSrc: string | undefined;
    description: string;
    longDetails: string;
    url: string;
    technologies: string[];
    features: string[];
    githubUrl?: string;
    demoUrl?: string;
    category: 'web' | 'mobile' | 'ai' | 'portfolio' | 'business';
    status: 'completed' | 'in-progress' | 'coming-soon';
    year: number;
}
