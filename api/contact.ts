/**
 * Función de Vercel: recibe el formulario de contacto y lo reenvía por correo.
 *
 * Variables de entorno (Vercel → Project → Settings → Environment Variables):
 *   GMAIL_USER          Cuenta de Gmail que envía el correo (ej. consultings996@gmail.com)
 *   GMAIL_APP_PASSWORD  Contraseña de aplicación de Google (NO la contraseña normal)
 *   CONTACT_TO          (opcional) Destinatario. Por defecto, GMAIL_USER
 */
import type { IncomingMessage, ServerResponse } from 'node:http'
import nodemailer from 'nodemailer'

// Vercel agrega `body` (ya parseado) a la petición y helpers a la respuesta.
type VercelRequest = IncomingMessage & { body?: unknown }
type VercelResponse = ServerResponse & {
  status: (code: number) => VercelResponse
  json: (body: unknown) => void
}

interface ContactPayload {
  name: string
  email: string
  company: string
  phone: string
  service: string
  timeline: string
  budget: string
  subject: string
  message: string
  _gotcha: string
}

const LIMITS: Record<Exclude<keyof ContactPayload, '_gotcha'>, number> = {
  name: 100,
  email: 254,
  company: 120,
  phone: 40,
  service: 80,
  timeline: 60,
  budget: 60,
  subject: 150,
  message: 5000
}
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function parseBody(body: unknown): ContactPayload | null {
  const data = typeof body === 'string' ? safeJson(body) : body
  if (!data || typeof data !== 'object') return null
  const d = data as Record<string, unknown>
  const text = (v: unknown) => (typeof v === 'string' ? v.trim() : '')
  return {
    name: text(d.name),
    email: text(d.email),
    company: text(d.company),
    phone: text(d.phone),
    service: text(d.service),
    timeline: text(d.timeline),
    budget: text(d.budget),
    subject: text(d.subject),
    message: text(d.message),
    _gotcha: text(d._gotcha)
  }
}

function safeJson(raw: string): unknown {
  try {
    return JSON.parse(raw)
  } catch {
    return null
  }
}

function validate(p: ContactPayload): string | null {
  if (!p.name || !p.email) return 'El nombre y el correo son obligatorios.'
  if (!p.service && !p.message) return 'Indica el servicio que te interesa o escribe un mensaje.'
  if (!EMAIL_RE.test(p.email)) return 'El correo no es válido.'
  for (const key of Object.keys(LIMITS) as (keyof typeof LIMITS)[]) {
    if (p[key].length > LIMITS[key]) return `El campo ${key} es demasiado largo.`
  }
  return null
}

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!)

// Evita que alguien inyecte cabeceras con saltos de línea en el asunto
const oneLine = (s: string) => s.replace(/[\r\n]+/g, ' ')

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ ok: false, error: 'Método no permitido.' })
  }

  const payload = parseBody(req.body)
  if (!payload) return res.status(400).json({ ok: false, error: 'Solicitud inválida.' })

  // Campo trampa lleno = bot. Se responde "ok" para no darle pistas.
  if (payload._gotcha) return res.status(200).json({ ok: true })

  const error = validate(payload)
  if (error) return res.status(400).json({ ok: false, error })

  const user = process.env.GMAIL_USER
  const pass = process.env.GMAIL_APP_PASSWORD
  if (!user || !pass) {
    console.error('Faltan GMAIL_USER o GMAIL_APP_PASSWORD en las variables de entorno.')
    return res.status(500).json({ ok: false, error: 'El servicio de correo no está configurado.' })
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user, pass }
  })

  const { name, email } = payload
  const subject = payload.subject || `Cotización: ${payload.service || 'consulta general'}`

  // Solo se incluyen los campos que el visitante llenó
  const fields: [string, string][] = (
    [
      ['Nombre', name],
      ['Correo', email],
      ['Empresa', payload.company],
      ['Teléfono / WhatsApp', payload.phone],
      ['Servicio', payload.service],
      ['Inicio deseado', payload.timeline],
      ['Presupuesto', payload.budget]
    ] as [string, string][]
  )
    .filter(([, value]) => value)
    .map(([label, value]) => [label, oneLine(value)] as [string, string])

  const message = payload.message || '(Sin mensaje adicional)'

  try {
    await transporter.sendMail({
      from: `"Sitio web A.X.L" <${user}>`,
      to: process.env.CONTACT_TO || user,
      // Al presionar "Responder" en Gmail, la respuesta va directo al visitante
      replyTo: { name: oneLine(name), address: email },
      subject: `[Sitio web] ${oneLine(subject)}`,
      text: `${fields.map(([k, v]) => `${k}: ${v}`).join('\n')}\n\n${message}`,
      html: `
        <h2>Nueva solicitud desde el sitio web</h2>
        <table cellpadding="6" style="border-collapse: collapse">
          ${fields
            .map(([k, v]) => `<tr><td><strong>${escapeHtml(k)}</strong></td><td>${escapeHtml(v)}</td></tr>`)
            .join('')}
        </table>
        <hr>
        <p style="white-space: pre-wrap">${escapeHtml(message)}</p>
      `
    })
    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Error al enviar el correo de contacto:', err)
    return res.status(502).json({ ok: false, error: 'No se pudo enviar el mensaje.' })
  }
}
