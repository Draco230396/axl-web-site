/**
 * Situaciones comunes en las que A.X.L puede ayudar.
 * Cada una apunta al servicio que la resuelve (slug de data/services.ts).
 */
export interface Signal {
  text: string
  service: string
}

export const signals: Signal[] = [
  { text: 'Capturas la misma información en dos o más sistemas.', service: 'integraciones' },
  { text: 'Los reportes se arman a mano en Excel cada semana.', service: 'automatizacion' },
  { text: 'Un cambio pequeño tarda semanas o depende de un proveedor.', service: 'software-a-medida' },
  { text: 'Tu aplicación se vuelve lenta cuando crecen los usuarios.', service: 'microservicios-cloud' },
  { text: 'Tus clientes no pueden hacer trámites en línea ni desde el celular.', service: 'web-movil' },
  { text: 'Sabes que necesitas digitalizarte, pero no por dónde empezar.', service: 'transformacion-digital' }
]
