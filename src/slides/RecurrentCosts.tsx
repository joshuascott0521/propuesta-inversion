import { CheckCircle2 } from 'lucide-react'
import { SectionIntro } from '../components/ui'

const DEV_ITEMS = [
  { label: 'Servidor tienda', value: 'Incluido' },
  { label: 'Servidor diseño', value: 'Incluido' },
  { label: 'Almacenamiento & Dominio', value: 'Incluido' },
]

export default function RecurrentCosts() {
  return (
    <div className="space-y-6">
      <SectionIntro
        title="Costos de Mantenimiento Operativo"
        subtitle="Predecibles, transparentes y directamente administrados por la empresa"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 space-y-3">
          <div className="flex justify-between items-center border-b border-slate-800 pb-2">
            <span className="text-xs font-bold text-slate-400 uppercase">
              Durante el Desarrollo
            </span>
            <span className="text-xs font-mono bg-slate-800 text-slate-300 px-2 py-0.5 rounded">
              Fase 1
            </span>
          </div>
          <ul className="text-xs text-slate-300 space-y-2">
            {DEV_ITEMS.map((item) => (
              <li key={item.label} className="flex justify-between">
                <span>{item.label}</span>
                <span className="font-mono text-slate-400">{item.value}</span>
              </li>
            ))}
          </ul>
          <div className="pt-3 border-t border-slate-800 flex justify-between items-center">
            <span className="text-xs font-bold text-slate-300">Estimado Mensual:</span>
            <span className="text-lg font-bold font-mono text-cyan-400">~$101.000 COP/mes</span>
          </div>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 space-y-3">
          <div className="flex justify-between items-center border-b border-slate-800 pb-2">
            <span className="text-xs font-bold text-emerald-400 uppercase">
              Desde Producción
            </span>
            <span className="text-xs font-mono bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded border border-emerald-800">
              Go Live
            </span>
          </div>
          <p className="text-[11px] text-slate-400">
            Se incorpora ambiente de pruebas separado para resguardo de operaciones.
          </p>
          <div className="pt-3 border-t border-slate-800 flex justify-between items-center">
            <span className="text-xs font-bold text-slate-300">Estimado Mensual:</span>
            <span className="text-lg font-bold font-mono text-emerald-400">
              ~$139.000 COP/mes
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl space-y-1 text-xs">
          <div className="font-bold text-slate-200">Adicionales Fijos / Variables:</div>
          <div className="text-slate-400">
            • Dominio corporativo: <strong className="text-slate-200">$59.990 COP/año</strong>
          </div>
          <div className="text-slate-400">
            • Pasarela Wompi:{' '}
            <strong className="text-slate-200">
              2,65% + $700 + IVA por transacción aprobada
            </strong>
          </div>
        </div>

        <div className="p-4 bg-emerald-950/30 border border-emerald-800/50 rounded-xl flex items-center gap-3">
          <CheckCircle2 className="w-8 h-8 text-emerald-400 shrink-0" />
          <p className="text-xs text-emerald-200 font-medium">
            <strong>Sin Comisiones Ocultas:</strong> NO existe comisión por diseño generado ni
            porcentaje cobrado por la plataforma sobre cada pedido.
          </p>
        </div>
      </div>
    </div>
  )
}
