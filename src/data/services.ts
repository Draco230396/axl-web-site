export type ServiceIconName = 'code' | 'cloud' | 'devices' | 'automation' | 'integration' | 'growth'

export interface Service {
    id: number;
    /** Identificador estable (se usa en el formulario de cotización) */
    slug: string;
    title: string;
    /** Versión corta para listas (footer, formulario) */
    shortTitle: string;
    description: string;
    icon: ServiceIconName;
}

const services: Service[] = [
    {
        id: 1,
        slug: 'software-a-medida',
        title: 'Desarrollo de software a medida',
        shortTitle: 'Software a medida',
        description: 'Diseñamos y construimos sistemas a la medida de tus procesos, desde el análisis de requerimientos hasta la puesta en producción y el soporte.',
        icon: 'code'
    },
    {
        id: 2,
        slug: 'microservicios-cloud',
        title: 'Arquitectura de microservicios y cloud',
        shortTitle: 'Microservicios y cloud',
        description: 'Diseñamos arquitecturas escalables y seguras, y migramos o desplegamos tus aplicaciones en la nube con buenas prácticas de DevOps.',
        icon: 'cloud'
    },
    {
        id: 3,
        slug: 'web-movil',
        title: 'Desarrollo de plataformas web y móviles',
        shortTitle: 'Plataformas web y móviles',
        description: 'Creamos portales, aplicaciones web y apps móviles rápidas, responsivas y fáciles de usar para tus clientes y colaboradores.',
        icon: 'devices'
    },
    {
        id: 4,
        slug: 'automatizacion',
        title: 'Automatización de procesos empresariales',
        shortTitle: 'Automatización de procesos',
        description: 'Eliminamos tareas manuales y repetitivas con flujos automatizados, reduciendo errores y liberando tiempo de tu equipo.',
        icon: 'automation'
    },
    {
        id: 5,
        slug: 'integraciones',
        title: 'Integraciones de sistemas y APIs',
        shortTitle: 'Integraciones y APIs',
        description: 'Conectamos tus sistemas, ERPs y servicios de terceros mediante APIs para que la información fluya sin capturas dobles.',
        icon: 'integration'
    },
    {
        id: 6,
        slug: 'transformacion-digital',
        title: 'Consultoría en transformación digital',
        shortTitle: 'Transformación digital',
        description: 'Evaluamos tu operación actual y definimos una hoja de ruta tecnológica con prioridades claras y resultados medibles.',
        icon: 'growth'
    }
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug)

export default services;
