import { Award, Cpu, DollarSign, ShieldCheck, Sliders, Workflow, Zap } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const NODES: { title: string; sub: string; icon: LucideIcon; color: string; bg: string }[] = [
  {
    title: 'Diseño',
    sub: 'Personalización',
    icon: Sliders,
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10 border-cyan-500/30',
  },
  {
    title: 'Cotización',
    sub: 'Cálculo en vivo',
    icon: DollarSign,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/30',
  },
  {
    title: 'Venta',
    sub: 'E-Commerce',
    icon: Zap,
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10 border-indigo-500/30',
  },
  {
    title: 'Producción',
    sub: 'Panel de control',
    icon: Workflow,
    color: 'text-purple-400',
    bg: 'bg-purple-500/10 border-purple-500/30',
  },
  {
    title: 'Trazabilidad',
    sub: 'Archivos e Hitos',
    icon: ShieldCheck,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10 border-emerald-500/30',
  },
]

export default function HeroNodes() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center space-y-5">
      <div className="max-w-3xl space-y-3">
        <span className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold rounded-full uppercase tracking-widest">
          Activo Tecnológico Comercial
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
          Transformando procesos manuales en un{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            activo digital trazable
          </span>
        </h2>
        <p className="text-slate-300 text-base max-w-2xl mx-auto">
          La inversión contempla la construcción de una plataforma propia orientada a conectar
          la experiencia de venta con la operación de fabricación.
        </p>
      </div>

      <div className="relative w-full max-w-3xl p-6 bg-slate-900/60 rounded-2xl border border-slate-800 shadow-2xl">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl font-black text-white text-lg tracking-wider shadow-lg shadow-cyan-500/20">
            <Cpu className="w-5 h-5" />
            PLATAFORMA CENTRAL
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {NODES.map((node) => (
            <div
              key={node.title}
              className={`p-4 rounded-xl border ${node.bg} flex flex-col items-center justify-center text-center space-y-2 hover:scale-105 transition-transform`}
            >
              <node.icon className={`w-6 h-6 ${node.color}`} />
              <div>
                <div className="font-bold text-slate-100 text-sm">{node.title}</div>
                <div className="text-[11px] text-slate-400">{node.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl max-w-2xl text-slate-300 text-sm flex items-center gap-3">
        <div className="p-2 bg-blue-500/20 text-blue-400 rounded-lg">
          <Award className="w-5 h-5" />
        </div>
        <p className="text-left">
          <strong className="text-white">Mensaje Principal:</strong> No estamos construyendo
          únicamente una tienda; estamos construyendo el sistema que conecta la venta con la
          producción.
        </p>
      </div>
    </div>
  )
}
