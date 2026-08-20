import { Callout, SectionIntro } from '../components/ui'

const PILLARS = [
  {
    num: '01',
    title: 'Desarrollo',
    desc: 'Construcción de la plataforma y sus 7 módulos centrales.',
    color: 'border-cyan-500/40 bg-cyan-500/10 text-cyan-400',
  },
  {
    num: '02',
    title: 'Infraestructura',
    desc: 'Servidores, almacenamiento, dominio y seguridad activa.',
    color: 'border-blue-500/40 bg-blue-500/10 text-blue-400',
  },
  {
    num: '03',
    title: 'Servicios Terceros',
    desc: 'Pasarelas de pago (Wompi) y logística externa.',
    color: 'border-indigo-500/40 bg-indigo-500/10 text-indigo-400',
  },
  {
    num: '04',
    title: 'Opcionales',
    desc: 'Funcionalidades avanzadas para incorporar en fases posteriores.',
    color: 'border-purple-500/40 bg-purple-500/10 text-purple-400',
  },
  {
    num: '05',
    title: 'Costos Externos',
    desc: 'Fotografía, modelos 3D y fuentes que aporta el cliente.',
    color: 'border-amber-500/40 bg-amber-500/10 text-amber-400',
  },
]

export default function FivePillars() {
  return (
    <div className="space-y-6">
      <SectionIntro
        title="Desglose de los 5 Bloques de Inversión"
        subtitle="Transparencia: cada categoría responde a una necesidad funcional distintiva"
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {PILLARS.map((p) => (
          <div
            key={p.num}
            className={`p-4 rounded-xl border ${p.color} flex flex-col justify-between space-y-3`}
          >
            <div className="text-xl font-black font-mono">{p.num}</div>
            <div>
              <div className="font-bold text-slate-100 text-sm">{p.title}</div>
              <div className="text-xs text-slate-300 mt-1 leading-snug">{p.desc}</div>
            </div>
          </div>
        ))}
      </div>

      <Callout>
        <strong className="text-cyan-400">Principio de Transparencia:</strong> Separar los
        costos permite saber exactamente qué se invierte en activos permanentes versus costos
        operacionales recurrentes.
      </Callout>
    </div>
  )
}
