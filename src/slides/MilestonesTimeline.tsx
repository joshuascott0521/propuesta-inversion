import { SectionIntro } from '../components/ui'

const MILESTONES = [
  { pct: '30%', title: 'Inicio del Proyecto', desc: 'Firma + Planificación + Arquitectura.' },
  {
    pct: '30%',
    title: 'Editor de Diseño',
    desc: 'Entrega del componente principal de personalización.',
  },
  { pct: '25%', title: 'Integraciones', desc: 'Componentes centrales del flujo comercial.' },
  {
    pct: '15%',
    title: 'Producción & Go-Live',
    desc: 'Pruebas finales y puesta en operación.',
  },
]

export default function MilestonesTimeline() {
  return (
    <div className="space-y-6">
      <SectionIntro
        title="Esquema Sugerido de Pagos por Hitos"
        subtitle="Inversión asociada a entregables tangibles verificables"
      />

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        {MILESTONES.map((m) => (
          <div
            key={m.title}
            className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 space-y-3 hover:border-cyan-500/50 transition-all"
          >
            <div className="text-3xl font-black font-mono text-cyan-400">{m.pct}</div>
            <div>
              <div className="font-bold text-slate-100 text-xs">{m.title}</div>
              <div className="text-[11px] text-slate-400 mt-1">{m.desc}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-center text-xs text-slate-400">
        * Este esquema representa una propuesta comercial y debe validarse formalmente dentro
        del marco contractual definitivo.
      </div>
    </div>
  )
}
