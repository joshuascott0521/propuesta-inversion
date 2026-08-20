import { SectionIntro } from '../components/ui'

const KPIS = [
  { label: 'EFICIENCIA', text: 'Reducción masiva de tareas repetitivas.' },
  { label: 'VELOCIDAD', text: 'Cotización inmediata para el cliente.' },
  { label: 'AUTOSERVICIO', text: 'El cliente avanza de forma autónoma.' },
  { label: 'CONTROL', text: 'Precios y diseños bajo reglas estrictas.' },
  { label: 'TRAZABILIDAD', text: 'Visibilidad total de venta a taller.' },
  { label: 'ESCALABILIDAD', text: 'Estructura lista para multiplicar catálogo.' },
]

export default function KpiValue() {
  return (
    <div className="space-y-6">
      <SectionIntro
        title="Beneficios Tangibles e Impacto Empresarial"
        subtitle="Traducción de desarrollo de software en resultados operativos"
      />

      <div className="p-6 bg-gradient-to-r from-emerald-950/60 via-slate-900 to-cyan-950/60 border border-emerald-500/40 rounded-2xl text-center space-y-2 shadow-xl">
        <div className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
          Dato Documentado de Referencia
        </div>
        <div className="text-4xl md:text-5xl font-black text-white font-mono tracking-tight">
          +170 HORAS / AÑO
        </div>
        <div className="text-xs text-emerald-200 font-medium">
          Potencialmente recuperables únicamente en el proceso de cotización bajo el escenario
          de referencia
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {KPIS.map((k) => (
          <div
            key={k.label}
            className="bg-slate-900/60 border border-slate-800 rounded-xl p-3.5 space-y-1"
          >
            <div className="text-xs font-extrabold text-cyan-400 tracking-wider">{k.label}</div>
            <div className="text-[11px] text-slate-300 leading-tight">{k.text}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
