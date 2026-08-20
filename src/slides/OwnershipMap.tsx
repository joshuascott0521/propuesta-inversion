import { Check } from 'lucide-react'
import { Callout, SectionIntro } from '../components/ui'

const ASSETS = [
  { title: 'Código Fuente', sub: 'Repositorio Git Completo' },
  { title: 'Dominio & DNS', sub: 'Titularidad Directa' },
  { title: 'Infraestructura', sub: 'Servidores Cloud Propios' },
  { title: 'Cuentas de Pago', sub: 'Wompi a su nombre' },
  { title: 'Base de Datos', sub: 'Información e Históricos' },
]

export default function OwnershipMap() {
  return (
    <div className="space-y-6">
      <SectionIntro
        title="Propiedad Total del Cliente"
        subtitle="El desarrollo entrega un activo propio, libre de ataduras contractuales con proveedores"
      />

      <div className="p-6 bg-slate-900/80 border border-slate-800 rounded-2xl flex flex-col items-center justify-center space-y-6">
        <div className="px-6 py-3 bg-cyan-500/20 border border-cyan-500/50 rounded-xl text-cyan-300 font-black tracking-wider text-lg text-center">
          EMPRESA DEL CLIENTE (TITULAR PREDETERMINADO)
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 w-full">
          {ASSETS.map((item) => (
            <div
              key={item.title}
              className="p-3 bg-slate-950 border border-slate-800 rounded-xl text-center space-y-1"
            >
              <Check className="w-4 h-4 text-emerald-400 mx-auto" />
              <div className="font-bold text-slate-200 text-xs">{item.title}</div>
              <div className="text-[10px] text-slate-400">{item.sub}</div>
            </div>
          ))}
        </div>
      </div>

      <Callout tone="emerald">
        <strong>Principio Rector:</strong> El proveedor administra técnicamente durante el
        desarrollo, pero el cliente mantiene el control y la propiedad intelectual absoluta de
        todos sus activos.
      </Callout>
    </div>
  )
}
