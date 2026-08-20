import { SectionIntro } from '../components/ui'

const PILLARS = [
  { num: '01', title: 'Canal de Venta', desc: 'Autoservicio y personalización interactiva' },
  { num: '02', title: 'Motor Comercial', desc: 'Reglas de precio automatizadas' },
  {
    num: '03',
    title: 'Sistema de Producción',
    desc: 'Archivos e información estructurada',
  },
  { num: '04', title: 'Activo Propio', desc: 'Control total de código e infraestructura' },
  { num: '05', title: 'Plataforma Escalable', desc: 'Crecimiento modular asegurado' },
]

export default function FivePillarsValue() {
  return (
    <div className="space-y-6">
      <SectionIntro
        title="La Justificación de la Inversión"
        subtitle="La adquisición de un activo tecnológico vs. la simple contratación de horas"
      />

      <div className="p-6 bg-slate-900/80 border border-slate-800 rounded-2xl flex flex-col items-center justify-center space-y-6">
        <div className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl text-white font-black text-sm tracking-widest shadow-lg text-center">
          ACTIVO TECNOLÓGICO DEL CLIENTE
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 w-full">
          {PILLARS.map((p) => (
            <div
              key={p.num}
              className="p-3 bg-slate-950 border border-slate-800 rounded-xl text-center space-y-1"
            >
              <div className="font-mono text-cyan-400 font-bold text-xs">{p.num}</div>
              <div className="font-bold text-slate-200 text-xs">{p.title}</div>
              <div className="text-[10px] text-slate-400">{p.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
