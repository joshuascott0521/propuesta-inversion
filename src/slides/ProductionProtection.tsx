import { Fragment } from 'react'
import { ArrowRight, CheckCircle2, Cpu, FileText, Workflow, Zap } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { SectionIntro } from '../components/ui'

const WORKFLOW: { step: string; icon: LucideIcon }[] = [
  { step: 'PEDIDO', icon: Zap },
  { step: 'VALIDACIÓN', icon: CheckCircle2 },
  { step: 'ARCHIVO TÉCNICO', icon: FileText },
  { step: 'ORDEN DE PRODUCCIÓN', icon: Workflow },
  { step: 'FABRICACIÓN', icon: Cpu },
]

const CONTROL_ITEMS = [
  'Motor de impresión dedicado',
  'Panel de producción con agrupación por técnica',
  'Generación de hoja de trabajo y ficha técnica única',
  'Aprobación formal de arte y trazabilidad de estados',
]

export default function ProductionProtection() {
  return (
    <div className="space-y-6">
      <SectionIntro
        title="Garantía en la Transición Comercial a Taller"
        subtitle="Estructura limpia de información para evitar errores y retrasos de fabricación"
      />

      <div className="flex flex-col md:flex-row items-center justify-between gap-2 p-4 bg-slate-900/80 border border-slate-800 rounded-2xl">
        {WORKFLOW.map((st, i) => (
          <Fragment key={st.step}>
            <div className="flex flex-col items-center gap-1.5 p-2 text-center">
              <st.icon className="w-5 h-5 text-cyan-400" />
              <span className="text-xs font-bold text-slate-200">{st.step}</span>
            </div>
            {i < WORKFLOW.length - 1 && (
              <ArrowRight className="hidden md:block w-4 h-4 text-slate-600" />
            )}
          </Fragment>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-xl space-y-2">
          <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wide">
            Estructuración Automatizada antes de Fabricar
          </h4>
          <p className="text-xs text-slate-300">
            El sistema empaqueta automáticamente: Producto base, Color, Desglose de tallas,
            Técnica exacta, Posición visual, Medidas milimétricas y Archivo vectorizado de alta
            resolución.
          </p>
        </div>

        <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-xl space-y-2">
          <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-wide">
            Componentes Clave de Control
          </h4>
          <ul className="text-xs text-slate-300 space-y-1">
            {CONTROL_ITEMS.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span aria-hidden="true">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
