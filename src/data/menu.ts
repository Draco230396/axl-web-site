export default [
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
  { label: 'Medios', route: '/media' },
  { label: 'Acerca de', route: '/about' },
  { label: 'Carreras', route: '/careers' }
]
