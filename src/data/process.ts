export interface ProcessStep {
  title: string
  description: string
}

/** Pasos de trabajo con un cliente, de la primera llamada al soporte. */
export const processSteps: ProcessStep[] = [
  {
    title: 'Diagnóstico',
    description: 'Entendemos tu operación, tus objetivos y tus restricciones antes de proponer cualquier tecnología.'
  },
  {
    title: 'Propuesta',
    description: 'Definimos alcance, arquitectura, tiempos y costos por escrito, sin letras chiquitas.'
  },
  {
    title: 'Desarrollo iterativo',
    description: 'Trabajamos en entregas cortas con demos frecuentes para que valides el avance desde el inicio.'
  },
  {
    title: 'Despliegue y soporte',
    description: 'Ponemos la solución en producción, capacitamos a tu equipo y te acompañamos después del lanzamiento.'
  }
]

/** Tecnologías con las que trabaja el equipo. */
export const techStack: string[] = [
  'Java',
  'Spring Boot',
  'Python',
  'FastAPI',
  'Node.js',
  'TypeScript',
  'Vue',
  'React',
  'PostgreSQL',
  'Docker',
  'AWS',
  'Google Cloud',
  'n8n'
]
