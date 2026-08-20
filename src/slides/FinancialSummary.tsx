import { AlertTriangle } from 'lucide-react'
import { SectionIntro } from '../components/ui'

interface PriceVersion {
  label: string
  badge: string
  accent: 'cyan' | 'amber'
  lines: { concept: string; amount: string; tone?: 'muted' | 'discount' | 'subtotal' }[]
  total: string
}

const VERSIONS: PriceVersion[] = [
  {
    label: 'Versión Documento Costos Detallados',
    badge: '110 Días',
    accent: 'cyan',
    lines: [
      { concept: 'Precio Lista', amount: '$77.000.000 COP', tone: 'muted' },
      { concept: 'Descuento Aplicado (20%)', amount: '-$15.400.000 COP', tone: 'discount' },
      { concept: 'Subtotal Desarrollo', amount: '$61.600.000 COP', tone: 'subtotal' },
      { concept: 'IVA (19%)', amount: '$11.704.000 COP', tone: 'muted' },
    ],
    total: '$73.304.000',
  },
  {
    label: 'Versión Documento Justificación',
    badge: 'Alcance Ampliado',
    accent: 'amber',
    lines: [
      { concept: 'Precio Lista', amount: '$101.500.000 COP', tone: 'muted' },
      { concept: 'Descuento Aplicado', amount: '-$20.300.000 COP', tone: 'discount' },
      { concept: 'Subtotal Desarrollo', amount: '$81.200.000 COP', tone: 'subtotal' },
      { concept: 'IVA (19%)', amount: '$15.428.000 COP', tone: 'muted' },
    ],
    total: '$96.628.000',
  },
]

const ACCENTS = {
  cyan: {
    card: 'bg-slate-900/90 border-2 border-cyan-500/50 shadow-xl',
    label: 'text-cyan-400',
    badge: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
    totalBox: 'bg-cyan-950/40 border-cyan-800',
    totalLabel: 'text-cyan-200',
    totalValue: 'text-cyan-300',
  },
  amber: {
    card: 'bg-slate-900/60 border border-amber-500/40',
    label: 'text-amber-400',
    badge: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
    totalBox: 'bg-amber-950/40 border-amber-800',
    totalLabel: 'text-amber-200',
    totalValue: 'text-amber-300',
  },
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
        subtitle="Presentación detallada de las alternativas comerciales en validación"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {VERSIONS.map((v) => {
          const a = ACCENTS[v.accent]
          return (
            <div key={v.label} className={`rounded-2xl p-5 space-y-4 ${a.card}`}>
              <div className="flex justify-between items-center gap-2 border-b border-slate-800 pb-2">
                <span className={`text-xs font-bold uppercase ${a.label}`}>{v.label}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded border shrink-0 ${a.badge}`}>
                  {v.badge}
                </span>
              </div>

              <div className="space-y-2 text-xs font-mono">
                {v.lines.map((line) => (
                  <div
                    key={line.concept}
                    className={`flex justify-between ${LINE_TONES[line.tone ?? 'muted']}`}
                  >
                    <span>{line.concept}</span>
                    <span>{line.amount}</span>
                  </div>
                ))}
              </div>

              <div
                className={`p-3 border rounded-xl flex justify-between items-center ${a.totalBox}`}
              >
                <span className={`text-xs font-bold ${a.totalLabel}`}>TOTAL IVA INCLUIDO</span>
                <span className={`text-xl font-black font-mono ${a.totalValue}`}>{v.total}</span>
              </div>
            </div>
          )
        })}
      </div>

      <div className="p-4 bg-amber-950/30 border border-amber-800/60 rounded-xl flex items-start gap-3 text-amber-200 text-xs">
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
