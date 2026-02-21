export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    link: string;
    featured: boolean;
}

const projects: Project[] = [
    {
        id: 1,
        title: 'E-commerce Dashboard',
        description: 'Panel de administración completo para gestión de ventas, inventario y usuarios con gráficos en tiempo real.',
        image: 'https://placehold.co/600x400/1a1a1a/FFF?text=Dashboard',
        tags: ['Vue 3', 'TypeScript', 'Tailwind', 'Chart.js'],
        link: '#',
        featured: true
    },
    {
        id: 2,
        title: 'App de Gestión de Tareas',
        description: 'Aplicación colaborativa para gestión de proyectos tipo Kanban con actualizaciones en tiempo real.',
        image: 'https://placehold.co/600x400/2a2a2a/FFF?text=Task+App',
        tags: ['React', 'Firebase', 'Redux'],
        link: '#',
        featured: true
    },
    {
        id: 3,
        title: 'Landing Page Corporativa',
        description: 'Sitio web corporativo de alto rendimiento con animaciones avanzadas y optimización SEO.',
        image: 'https://placehold.co/600x400/3a3a3a/FFF?text=Landing+Page',
        tags: ['Astro', 'CSS Modules', 'Framer Motion'],
        link: '#',
        featured: true
    },
    {
        id: 4,
        title: 'API RESTful Segura',
        description: 'Backend escalable para aplicación financiera con autenticación JWT y encriptación de datos.',
        image: 'https://placehold.co/600x400/4a4a4a/FFF?text=Secure+API',
        tags: ['Node.js', 'Express', 'MongoDB', 'Docker'],
        link: '#',
        featured: false
    },
    {
        id: 5,
        title: 'Blog Personal',
        description: 'Blog minimalista con sistema de gestión de contenido (CMS) headless.',
        image: 'https://placehold.co/600x400/5a5a5a/FFF?text=Blog',
        tags: ['Next.js', 'Sanity.io', 'GraphQL'],
        link: '#',
        featured: false
    }
];

export default projects;
