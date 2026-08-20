import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { SectionIntro } from '../components/ui'

const FAQS = [
  {
    q: '¿Por qué cuesta tanto el editor?',
    a: 'Porque concentra una parte importante de la experiencia de personalización y requiere que el diseño pueda continuar correctamente hacia cotización y producción.',
  },
  {
    q: '¿Por qué no hacer todo en un solo servidor?',
    a: 'Porque las cargas de procesamiento del diseño pueden afectar la operación comercial si comparten los mismos recursos.',
  },
  {
    q: '¿Por qué necesito un motor de cotización?',
    a: 'Porque los precios dependen de diferentes variables y reglas comerciales que deben aplicarse consistentemente.',
  },
  {
    q: '¿Por qué necesito un panel de producción?',
    a: 'Porque permite estructurar la información necesaria para fabricar y reducir la transcripción manual.',
  },
  {
    q: '¿Qué costos voy a tener después?',
    a: 'Infraestructura, dominio y las comisiones de servicios externos cuando correspondan.',
  },
  { q: '¿Pago por cada diseño?', a: 'No se establece un costo por diseño creado.' },
  {
    q: '¿Pago comisión por cada pedido a la plataforma?',
    a: 'No se establece una comisión de plataforma por pedido.',
  },
  {
    q: '¿El código queda siendo del cliente?',
    a: 'El repositorio de código se transfiere al cliente al finalizar.',
  },
  {
    q: '¿Puedo agregar funcionalidades después?',
    a: 'Sí. La propuesta contempla funcionalidades opcionales que pueden incorporarse posteriormente.',
  },
  {
    q: '¿Cuál es el valor final?',
    a: 'Debe validarse primero cuál de las dos versiones económicas corresponde al alcance comercial definitivo.',
  },
]

export default function FaqBackup() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null)

  return (
    <div className="space-y-4">
      <SectionIntro
        size="sm"
        title="Preguntas Difíciles del Cliente (Q&A de Respaldo)"
        subtitle="Respuestas directas para la mesa de negociación"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[420px] overflow-y-auto pr-2">
        {FAQS.map((f, i) => {
          const isOpen = activeFaq === i
          return (
            <div
              key={f.q}
              className="bg-slate-900/80 border border-slate-800 rounded-xl hover:border-cyan-500/40 transition-all h-fit"
            >
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setActiveFaq(isOpen ? null : i)}
                className="w-full p-3.5 flex justify-between items-center gap-2 text-left text-xs font-bold text-slate-200 cursor-pointer"
              >
                <span>{f.q}</span>
                {isOpen ? (
                  <ChevronUp className="w-4 h-4 text-cyan-400 shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                )}
              </button>
              {isOpen && (
                <p className="mx-3.5 mb-3.5 text-xs text-slate-300 leading-relaxed border-t border-slate-800 pt-2 select-text">
                  {f.a}
                </p>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
