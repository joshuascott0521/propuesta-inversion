import { SectionIntro } from '../components/ui'

const CYCLE = [
  {
    step: '01. PREVENIR',
    desc: 'Servidores separados y contenedores aislados para evitar sobrecargas del editor.',
    color: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10',
  },
  {
    step: '02. DETECTAR',
    desc: 'Monitoreo constante de errores y métricas de desempeño del sistema.',
    color: 'text-blue-400 border-blue-500/30 bg-blue-500/10',
  },
  {
    step: '03. RESPALDAR',
    desc: 'Respaldos automáticos periódicos de bases de datos y archivos multimedia.',
    color: 'text-indigo-400 border-indigo-500/30 bg-indigo-500/10',
  },
  {
    step: '04. RECUPERAR',
    desc: 'Planes de restauración probados e infraestructura redundante.',
    color: 'text-purple-400 border-purple-500/30 bg-purple-500/10',
  },
]

const GUARANTEES = [
  'Certificados HTTPS & Encriptación',
  'Ambiente de pruebas previo a producción',
  'Piloto controlado con pedidos reales',
]

export default function InfraSecurity() {
  return (
    <div className="space-y-6">
      <SectionIntro
        title="Protección y Continuidad Operativa"
        subtitle="Infraestructura diseñada para sostener la operación comercial sin caídas ni sorpresas"
      />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {CYCLE.map((c) => (
          <div key={c.step} className={`p-4 rounded-xl border ${c.color} space-y-2`}>
            <div className="font-mono font-bold text-xs">{c.step}</div>
            <div className="text-[11px] text-slate-300 leading-snug">{c.desc}</div>
          </div>
        ))}
      </div>

      <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl space-y-2 text-xs text-slate-300">
        <div className="font-bold text-slate-200">Garantías de la Arquitectura:</div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {GUARANTEES.map((g) => (
            <span key={g}>
              <span aria-hidden="true">✓</span> {g}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
