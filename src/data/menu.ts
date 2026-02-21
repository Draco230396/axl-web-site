export default [
  { label: 'Inicio', link: '/' },
  {
    label: 'Soluciones',
    children: [
      {
        title: 'Tecnología',
        links: ['Cloud', 'DevOps', 'IA'], // En un futuro: links: [{ label: 'Cloud', url: '/services#cloud' }]
        action: '/services' // Redirección temporal
      },
      {
        title: 'Negocio',
        links: ['Consultoría', 'Transformación Digital'],
        action: '/services'
      }
    ]
  },
  {
    label: 'Industrias',
    children: [
      {
        title: 'Sectores',
        links: ['Finanzas', 'Retail', 'Salud'],
        action: '/services'
      }
    ]
  },
  { label: 'Insights', link: '/insights' },
  { label: 'Acerca de', link: '/about' },
  { label: 'Carreras', link: '/careers' },
  { label: 'Contacto', link: '/contact' }
]
