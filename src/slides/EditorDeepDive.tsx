import { Sliders } from 'lucide-react'

const CAPABILITIES = [
  'Carga y manipulación de logos vectoriales y bitmaps.',
  'Inclusión y edición de textos con tipografías parametrizadas.',
  'Personalización multinivel por prenda y color.',
  'Posicionamiento milimétrico en canvas interactivo.',
  'Visualización previa en tiempo real.',
  'Validación automática de áreas permitidas de impresión.',
  'Generación de alertas de calidad (resolución / contraste).',
  'Experiencia responsiva adaptable a dispositivos móviles.',
  'Reducción total de la intervención manual de diseño.',
]

const BENEFITS = [
  {
    title: 'Autoservicio Total',
    desc: 'El cliente completa su personalización sin intermediarios.',
  },
  {
    title: 'Venta 24/7',
    desc: 'Capacidad de recibir pedidos complejos fuera del horario laboral.',
  },
  {
    title: 'Cero Conversaciones Inútiles',
    desc: 'Elimina cientos de mensajes repetitivos sobre ajustes.',
  },
  {
    title: 'Sin Errores de Interpretación',
    desc: 'Lo que el cliente aprueba visualmente es lo que pasa a producción.',
  },
]

export default function EditorDeepDive() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
      <div className="md:col-span-5 bg-slate-900/80 border border-slate-800 rounded-2xl p-5 space-y-3">
        <h4 className="font-bold text-sm border-b border-slate-800 pb-2 text-cyan-400 flex items-center gap-2">
          <Sliders className="w-4 h-4" /> Funcionalidades Técnicas del Editor
        </h4>
        <ul className="space-y-2 text-xs text-slate-300">
          {CAPABILITIES.map((cap) => (
            <li key={cap} className="flex items-start gap-2">
              <span className="text-cyan-400 font-bold" aria-hidden="true">
                •
              </span>
              <span>{cap}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="md:col-span-7 space-y-4">
        <div className="p-4 bg-cyan-950/30 border border-cyan-800/50 rounded-xl">
          <h3 className="text-lg font-extrabold text-cyan-300">
            ¿Por qué representa 33,75 días / $18.900.000?
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            Es el componente con mayor fricción comercial. Transforma el canal en una
            herramienta de autoservicio guiada sin necesidad de diseñadores en vivo.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {BENEFITS.map((b) => (
            <div
              key={b.title}
              className="bg-slate-900/60 border border-slate-800 rounded-xl p-3.5 space-y-1"
            >
              <div className="font-bold text-xs text-cyan-400">{b.title}</div>
              <div className="text-[11px] text-slate-400 leading-tight">{b.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
