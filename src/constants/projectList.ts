import { ProjectModel } from '@/types';

export const PROJECT_LIST: ProjectModel[] = [
    {
        id: 1,
        title: 'XYIAN Software',
        description:
            'XYIAN Software Public web application built with nextjs & typescript',
        longDetails:
            'A comprehensive software company website showcasing our services, team, and portfolio. Built with modern web technologies including Next.js 15, TypeScript, PrimeReact, and SCSS. Features responsive design, SEO optimization, and smooth animations.',
        imgSrc: '/images/XYIAN_BANNER.png', //use one from logo?
        url: 'https://xyian.com/',
        technologies: [
            'Next.js 15',
            'TypeScript',
            'PrimeReact',
            'SCSS',
            'Tailwind CSS',
        ],
        features: [
            'Responsive Design',
            'SEO Optimized',
            'Dark Theme',
            'Smooth Animations',
            'Contact Forms',
        ],
        category: 'web',
        status: 'completed',
        year: 2024,
    },
    {
        id: 12,
        title: 'XYIAN Fitness',
        description: 'XYIAN Software Example Fitness application',
        longDetails:
            'A comprehensive fitness tracking application designed to help users achieve their health goals. Features workout planning, progress tracking, nutrition logging, and social features for community engagement.',
        imgSrc: 'https://github.com/XYIANSoftware/images/blob/main/projects/coming%20soon%20square.png?raw=true', //use one from logo?
        url: 'https://xyian.com/',
        technologies: [
            'React Native',
            'Node.js',
            'MongoDB',
            'Firebase',
            'Redux',
        ],
        features: [
            'Workout Tracking',
            'Progress Analytics',
            'Nutrition Logging',
            'Social Features',
            'Goal Setting',
        ],
        category: 'mobile',
        status: 'coming-soon',
        year: 2024,
    },
    {
        id: 13,
        title: 'XYIAN Portfolio',
        description: 'XYIAN Software Example for a personal portfolio.',
        longDetails:
            'A stunning personal portfolio template showcasing creative work, skills, and achievements. Features smooth animations, interactive elements, and a modern design that adapts to different content types.',
        imgSrc: 'https://raw.githubusercontent.com/XYIANSoftware/images/refs/heads/main/logos_XYIAN/352071BE-C25D-419E-AC0F-6D25A28DF4F3.webp', //use one from logo?
        url: 'https://xyian.com/',
        technologies: [
            'Next.js',
            'Framer Motion',
            'Three.js',
            'GSAP',
            'Tailwind CSS',
        ],
        features: [
            'Interactive Animations',
            '3D Elements',
            'Portfolio Gallery',
            'Contact Integration',
            'Blog System',
        ],
        category: 'portfolio',
        status: 'completed',
        year: 2024,
    },
    {
        id: 14,
        title: 'XYIAN Photography',
        description: 'XYIAN Software Photography / art portfolio Example',
        longDetails:
            'A beautiful photography and art portfolio platform designed to showcase visual work in the best possible way. Features high-resolution image galleries, lightbox viewing, and e-commerce integration.',
        imgSrc: 'https://github.com/XYIANSoftware/images/blob/main/projects/coming%20soon%20square.png?raw=true', //use one from logo?
        url: 'https://xyian.com/',
        technologies: ['Vue.js', 'Nuxt.js', 'Stripe', 'Cloudinary', 'Vuex'],
        features: [
            'High-Res Gallery',
            'Lightbox Viewing',
            'E-commerce',
            'Print Sales',
            'Client Galleries',
        ],
        category: 'portfolio',
        status: 'coming-soon',
        year: 2024,
    },
    {
        id: 15,
        title: 'XYIAN AI',
        description: 'XYIAN Software basic AI integration Example',
        longDetails:
            'An innovative AI-powered application demonstrating the integration of machine learning and artificial intelligence in modern web applications. Features natural language processing, image recognition, and predictive analytics.',
        imgSrc: 'https://raw.githubusercontent.com/XYIANSoftware/images/refs/heads/main/logos_XYIAN/0FFFF9EB-A62A-44FB-87EA-8D21A33D2E01.webp', //use one from logo?
        url: 'https://xyian.com/',
        technologies: [
            'Python',
            'TensorFlow',
            'React',
            'FastAPI',
            'PostgreSQL',
        ],
        features: [
            'Natural Language Processing',
            'Image Recognition',
            'Predictive Analytics',
            'Real-time Processing',
            'API Integration',
        ],
        category: 'ai',
        status: 'in-progress',
        year: 2024,
    },
    {
        id: 2,
        title: 'Looks Delivered',
        description:
            'Business Portfolio and Booking system for a mobile salon business.',
        longDetails:
            'A comprehensive booking and portfolio system for a mobile salon business. Features appointment scheduling, service catalog, customer management, and payment processing. Designed to streamline operations and enhance customer experience.',
        imgSrc: 'https://github.com/XYIANSoftware/images/blob/main/projects/Looks%20Delivered.png?raw=true', //use one from logo?
        url: 'https://looksdelivered.com/',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
        features: [
            'Appointment Booking',
            'Service Catalog',
            'Customer Portal',
            'Payment Processing',
            'Admin Dashboard',
        ],
        category: 'business',
        status: 'completed',
        year: 2023,
    },
    {
        id: 3,
        title: 'Personal Portfolio',
        description:
            'Basic personal site for things like job applications, freelancing, blogging etc.',
        longDetails:
            'A clean and professional personal portfolio website designed for job applications, freelancing, and personal branding. Features a blog system, project showcase, and contact integration.',
        imgSrc: 'https://github.com/XYIANSoftware/images/blob/main/kxd_logos/KXD-Logo2.png?raw=true', //use one from logo?
        url: 'https://kyledilbeck.com/',
        technologies: [
            'Next.js',
            'TypeScript',
            'Tailwind CSS',
            'MDX',
            'Vercel',
        ],
        features: [
            'Blog System',
            'Project Showcase',
            'Contact Forms',
            'SEO Optimized',
            'Fast Performance',
        ],
        category: 'portfolio',
        status: 'completed',
        year: 2023,
    },
    {
        id: 4,
        title: 'Company Site',
        description: 'Basic company site without functions',
        longDetails:
            'A professional company website showcasing business services, team, and company information. Features a clean design, contact information, and service descriptions.',
        imgSrc: 'https://github.com/XYIANSoftware/images/blob/main/projects/D_logo.png?raw=true', //use one from logo?
        url: 'https://dilbeckandsons.com/',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'jQuery'],
        features: [
            'Responsive Design',
            'Contact Information',
            'Service Showcase',
            'Team Section',
            'About Page',
        ],
        category: 'business',
        status: 'completed',
        year: 2023,
    },
];
