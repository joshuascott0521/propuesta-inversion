import { AlertTriangle } from 'lucide-react'
import { SectionIntro } from '../components/ui'

const VERSION = {
  label: 'Versión Documento Costos Detallados',
  badge: '110 Días',
  lines: [
    { concept: 'Precio Lista', amount: '$77.000.000 COP', tone: 'muted' },
    { concept: 'Descuento Aplicado (20%)', amount: '-$15.400.000 COP', tone: 'discount' },
    { concept: 'Subtotal Desarrollo', amount: '$61.600.000 COP', tone: 'subtotal' },
    { concept: 'IVA (19%)', amount: '$11.704.000 COP', tone: 'muted' },
  ],
  total: '$73.304.000',
} as const

const LINE_TONES = {
  muted: 'text-slate-400',
  discount: 'text-emerald-400',
  subtotal: 'text-slate-200 font-bold border-t border-slate-800 pt-2',
} as const

export default function FinancialSummary() {
  return (
    <div className="space-y-6">
      <SectionIntro
        title="Cifras Económicas de la Propuesta"
        subtitle="Desglose de la inversión de desarrollo hasta el valor final con IVA"
      />

      <div className="max-w-lg mx-auto w-full rounded-2xl p-6 space-y-5 bg-slate-900/90 border-2 border-cyan-500/50 shadow-xl">
        <div className="flex justify-between items-center gap-3 border-b border-slate-800 pb-3">
          <span className="text-xs font-bold uppercase text-cyan-400">{VERSION.label}</span>
          <span className="text-[10px] px-2 py-0.5 rounded border shrink-0 bg-cyan-500/10 text-cyan-300 border-cyan-500/30">
            {VERSION.badge}
          </span>
        </div>

        <div className="space-y-2.5 text-xs font-mono">
          {VERSION.lines.map((line) => (
            <div
              key={line.concept}
              className={`flex justify-between gap-4 ${LINE_TONES[line.tone]}`}
            >
              <span>{line.concept}</span>
              <span className="whitespace-nowrap">{line.amount}</span>
            </div>
          ))}
        </div>

        <div className="p-4 border rounded-xl flex justify-between items-center gap-3 bg-cyan-950/40 border-cyan-800">
          <span className="text-xs font-bold text-cyan-200">TOTAL IVA INCLUIDO</span>
          <span className="text-2xl font-black font-mono text-cyan-300 whitespace-nowrap">
            {VERSION.total}
          </span>
        </div>
      </div>

      <div className="max-w-3xl mx-auto p-4 bg-amber-950/30 border border-amber-800/60 rounded-xl flex items-start gap-3 text-amber-200 text-xs">
        <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        <div>
          <strong className="text-amber-400">Punto Pendiente de Validación Comercial:</strong>{' '}
          No se mezclan las cifras ni se inventan justificaciones. La versión económica
          definitiva será alineada formalmente en la sesión de validación de alcance.
        </div>
      </div>
    </div>
  )
}
