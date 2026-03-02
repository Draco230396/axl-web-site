export default [
  { label: 'Inicio', link: '/' },
  {
    label: 'Soluciones',
    children: [
      {
        title: 'Tecnología',
        links: [
          { name: 'Cloud', route: '/solutions/cloud' },
          { name: 'DevOps', route: '/solutions/devops' },
          { name: 'IA', route: '/solutions/ia' }
        ]
      },
      {
        title: 'Negocio',
        links: [
          { name: 'Consultoría', route: '/solutions/consulting' },
          { name: 'Transformación Digital', route: '/solutions/digital' }
        ]
      }
    ]
  },
  {
    label: 'Industrias',
    children: [
      {
        title: 'Sectores',
        links: [
          { name: 'Finanzas', route: '/industries/finance' },
          { name: 'Retail', route: '/industries/retail' },
          { name: 'Salud', route: '/industries/health' }
        ]
      }
    ]
  },
  { label: 'Insights', link: '/insights' },
  { label: 'Medios', link: '/media' },
  { label: 'Acerca de', link: '/about' },
  { label: 'Carreras', link: '/careers' },
  { label: 'Contacto', link: '/contact' }
]
