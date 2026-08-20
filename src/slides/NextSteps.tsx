import { SectionIntro } from '../components/ui'

const STEPS = [
  {
    num: '01',
    title: 'Validar Alcance',
    desc: 'Confirmar la versión definitiva de funcionalidades.',
  },
  {
    num: '02',
    title: 'Validar Inversión',
    desc: 'Confirmar cuál versión económica corresponde al alcance.',
  },
  {
    num: '03',
    title: 'Confirmar Opcionales',
    desc: 'Definir si Visor 3D queda dentro o fuera.',
  },
  { num: '04', title: 'Formalizar Proyecto', desc: 'Aprobación comercial y contractual.' },
  {
    num: '05',
    title: 'Iniciar Ejecución',
    desc: 'Discovery → Arquitectura → QA → Producción.',
  },
]

export default function NextSteps() {
  return (
    <div className="space-y-6">
      <SectionIntro
        title="Ruta de Decisión y Formalización"
        subtitle="Pasos inmediatos para la activación del proyecto"
      />

      <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
        {STEPS.map((step) => (
          <div
            key={step.num}
            className="bg-slate-900/80 border border-slate-800 rounded-xl p-3.5 space-y-2"
          >
            <div className="font-mono font-black text-cyan-400 text-sm">{step.num}</div>
            <div className="font-bold text-slate-100 text-xs">{step.title}</div>
            <div className="text-[11px] text-slate-400">{step.desc}</div>
          </div>
        ))}
      </div>

      <div className="p-5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl text-center text-white font-black tracking-wider text-base shadow-xl">
        SIGUIENTE PASO: Validar alcance + Inversión + Cronograma
      </div>
    </div>
  )
}
