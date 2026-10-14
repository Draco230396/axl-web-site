// Usa el nombre corto de uno de los servicios (data/services.ts) como categoría
export type ProjectCategory =
    | 'Software a medida'
    | 'Microservicios y cloud'
    | 'Plataformas web y móviles'
    | 'Automatización de procesos'
    | 'Integraciones y APIs'
    | 'Transformación digital'

export interface Project {
    id: number;
    category: ProjectCategory;
    title: string;
    description: string;
    image: string;
    tags: string[];
    link: string;
    featured: boolean;
}

/**
 * Proyectos que se muestran en el sitio.
 *
 * Mientras la lista esté vacía, la sección de proyectos del inicio, la opción
 * "Proyectos" del menú y del footer, y la página /projects se ocultan solas.
 * Al agregar el primero, todo vuelve a aparecer.
 *
 * Ejemplo:
 * {
 *     id: 1,
 *     category: 'Plataformas web y móviles',
 *     title: 'Portal de clientes para aseguradora',
 *     description: 'Qué problema resolvió y qué resultado dio, en una o dos frases.',
 *     image: importada desde '@/assets/images/projects/...',
 *     tags: ['Vue 3', 'Spring Boot', 'PostgreSQL'],
 *     link: 'https://...',   // o '' si no es público
 *     featured: true
 * }
 */
const projects: Project[] = [];

export const hasProjects = projects.length > 0;

export default projects;
