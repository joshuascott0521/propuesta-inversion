import { AlertTriangle, CheckCircle2 } from 'lucide-react'
import { Callout } from '../components/ui'

const MANUAL_FLOW = [
  'Cliente',
  'Mensajes',
  'Cotización',
  'Diseño',
  'Confirmación',
  'Producción',
]
const PLATFORM_FLOW = ['Cliente', 'Diseño', 'Cotización', 'Compra', 'Producción']

const PAIN_POINTS = [
  'Cotización manual con retrasos en respuesta.',
  'Intercambio constante de chat/correo sin trazabilidad.',
  'Dependencia directa del conocimiento de personas específicas.',
  'Errores humanos en escala, color y posicionamiento.',
  'Transcripción manual de datos hacia producción.',
  'Riesgo permanente de reimpresiones por interpretación errónea.',
  'Sin capacidad de vender fuera de jornada laboral.',
]

const BENEFITS = [
  'Cotización automática en tiempo real bajo reglas del servidor.',
  'Autoservicio de personalización con previsualización exacta.',
  'Reglas de negocio estandarizadas e independientes de personas.',
  'Validación automática de áreas de impresión y calidad.',
  'Traspaso directo de fichas técnicas al taller sin transcripción.',
  'Control estricto de margen y consistencia de precios.',
  'Atención de ventas 24/7 sin barreras de horario.',
]

function FlowStrip({ steps, className }: { steps: string[]; className: string }) {
  return (
    <div
      className={`text-xs font-mono flex items-center justify-start gap-1 flex-wrap ${className}`}
    >
      {steps.map((step, i) => (
        <span key={step} className="flex items-center gap-1">
          <span>{step}</span>
          {i < steps.length - 1 && <span aria-hidden="true">→</span>}
        </span>
      ))}
    </div>
  )
}

export default function BeforeAfter() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-red-950/10 border border-red-900/30 rounded-2xl p-5 space-y-4">
          <div className="flex items-center justify-between border-b border-red-900/30 pb-3">
            <div className="flex items-center gap-2 text-red-400 font-bold text-base">
              <AlertTriangle className="w-5 h-5" />
              HOY (Operación Manual)
            </div>
            <span className="text-xs bg-red-950 text-red-400 px-2.5 py-1 rounded-full border border-red-800/50">
              Alto Riesgo / Ineficiente
            </span>
          </div>

          <FlowStrip steps={MANUAL_FLOW} className="text-red-300" />

          <ul className="space-y-2 text-xs text-slate-300">
            {PAIN_POINTS.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-red-500 font-bold" aria-hidden="true">
                  •
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-emerald-950/10 border border-emerald-900/30 rounded-2xl p-5 space-y-4">
          <div className="flex items-center justify-between border-b border-emerald-900/30 pb-3">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-base">
              <CheckCircle2 className="w-5 h-5" />
              PROPUESTA (Plataforma Digital)
            </div>
            <span className="text-xs bg-emerald-950 text-emerald-400 px-2.5 py-1 rounded-full border border-emerald-800/50">
              Automatizado
            </span>
          </div>

          <FlowStrip steps={PLATFORM_FLOW} className="text-emerald-300" />

          <ul className="space-y-2 text-xs text-slate-300">
            {BENEFITS.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold" aria-hidden="true">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Callout>
        <p className="font-semibold">
          <strong className="text-cyan-400">Mensaje Destacado:</strong> Cada proceso manual
          representa tiempo consumido, dependencia operativa y posibilidad latente de error
          financiero.
        </p>
      </Callout>
    </div>
  )
}
