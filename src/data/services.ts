export interface Service {
    id: number;
    title: string;
    description: string;
    icon: string; // Using emojis for now as placeholders, can swap for SVG component names later
    color: string;
}

const services: Service[] = [
    {
        id: 1,
        title: 'Desarrollo Web',
        description: 'Sitios web modernos, rápidos y responsivos utilizando las últimas tecnologías como Vue.js, React y Node.js.',
        icon: '💻',
        color: 'from-blue-400 to-blue-600'
    },
    {
        id: 2,
        title: 'Diseño UI/UX',
        description: 'Interfaces intuitivas y atractivas que mejoran la experiencia del usuario y la conversión.',
        icon: '🎨',
        color: 'from-purple-400 to-purple-600'
    },
    {
        id: 3,
        title: 'SEO & Marketing',
        description: 'Optimización para motores de búsqueda y estrategias digitales para hacer crecer tu negocio.',
        icon: '🚀',
        color: 'from-green-400 to-green-600'
    },
    {
        id: 4,
        title: 'Aplicaciones Móviles',
        description: 'Desarrollo de apps nativas e híbridas para iOS y Android.',
        icon: '📱',
        color: 'from-orange-400 to-orange-600'
    }
];

export default services;
