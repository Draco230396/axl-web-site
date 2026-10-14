/**
 * Datos de contacto y redes de A.X.L en un solo lugar.
 * Lo usan el TopBar, el Footer, Contacto, Carreras, Privacidad y los iconos flotantes.
 */
export const company = {
  name: 'A.X.L',
  legalName: 'A.X.L – Advanced eXponential Logic',
  email: 'consultings996@gmail.com',
  phone: {
    display: '+52 2381476695',
    href: 'tel:+522381476695'
  },
  location: 'México (Híbrido/Remoto)'
} as const

export interface SocialLink {
  id: 'whatsapp' | 'linkedin' | 'facebook' | 'instagram'
  label: string
  short: string
  url: string
}

export const socialLinks: SocialLink[] = [
  { id: 'whatsapp', label: 'WhatsApp', short: 'WA', url: 'https://wa.me/message/IXR5TMGSMIZJA1' },
  { id: 'linkedin', label: 'LinkedIn', short: 'IN', url: 'https://www.linkedin.com/in/a-x-l-advanced-exponential-logic9729a43aa/' },
  { id: 'facebook', label: 'Facebook', short: 'FB', url: 'https://www.facebook.com/Advanced.eXponential.Logic' },
  { id: 'instagram', label: 'Instagram', short: 'IG', url: 'https://www.instagram.com/axlconsultings/' }
]

export const social = (id: SocialLink['id']): SocialLink =>
  socialLinks.find((s) => s.id === id)!
