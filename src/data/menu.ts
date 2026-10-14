// Solo rutas que existen. "Inicio" se alcanza desde el logo y "Contacto" es el botón del encabezado.
import { hasProjects } from './projects'

export interface MenuItem {
  label: string
  link: string
}

const menu: MenuItem[] = [
  { label: 'Servicios', link: '/#servicios' },
  ...(hasProjects ? [{ label: 'Proyectos', link: '/projects' }] : []),
  { label: 'Cómo trabajamos', link: '/#como-trabajamos' },
  { label: 'Nosotros', link: '/about' },
  { label: 'Insights', link: '/insights' },
  { label: 'Carreras', link: '/careers' }
]

export const contactLink: MenuItem = { label: 'Cotizar proyecto', link: '/#cotizar' }

export default menu
