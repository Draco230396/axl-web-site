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

        links: ['Finanzas', 'Retail', 'Salud'],
        action: '/services'
      }
    ]
  },
  { label: 'Insights', link: '/insights' },
  { label: 'Acerca de', link: '/about' },
  { label: 'Carreras', link: '/careers' },
  { label: 'Contacto', link: '/contact' }

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
