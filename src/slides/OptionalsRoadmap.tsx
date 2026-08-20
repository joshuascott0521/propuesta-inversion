import { AlertTriangle } from 'lucide-react'
import { SectionIntro } from '../components/ui'

interface OptionalFeature {
  name: string
  cost: string
  /** Marca las funcionalidades cuyo alcance sigue en validación comercial. */
  pending?: boolean
}

const OPTIONALS: OptionalFeature[] = [
  { name: 'Visor 3D Interactivo', cost: '$5.250.000 COP', pending: true },
  { name: 'Programa de Referidos', cost: '$3.500.000 COP' },
  { name: 'Biblioteca de Diseños Propios', cost: '$2.625.000 COP' },
  { name: 'Técnicas y Prendas Adicionales', cost: '$4.375.000 COP' },
  { name: 'Aislamiento por Organización (Multi-Tenant)', cost: '$3.500.000 COP' },
]

export default function OptionalsRoadmap() {
  return (
    <div className="space-y-6">
      <SectionIntro
        title="Crecimiento Modular Opcional"
        subtitle="Funcionalidades avanzadas para incorporar en etapas de consolidación posterior"
      />

      <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/60">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-slate-800 bg-slate-950 text-slate-400 font-bold uppercase">
              <th scope="col" className="py-3 px-4">
                Funcionalidad Opcional
              </th>
              <th scope="col" className="py-3 px-4 text-right">
                Inversión Estimada
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800 text-slate-200">
            {OPTIONALS.map((row) => (
              <tr key={row.name} className="hover:bg-slate-800/40">
                <td className="py-3 px-4 font-medium">
                  <span className="flex items-center gap-2 flex-wrap">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" aria-hidden="true" />
                    {row.name}
                    {row.pending && (
                      <span className="text-[10px] bg-amber-500/10 border border-amber-500/30 text-amber-400 px-2 py-0.5 rounded-full">
                        Punto de validación comercial
                      </span>
                    )}
                  </span>
                </td>
                <td className="py-3 px-4 text-right font-mono font-bold text-purple-300">
                  {row.cost}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-4 bg-amber-950/20 border border-amber-800/40 rounded-xl space-y-1 text-xs text-amber-200">
        <div className="font-bold flex items-center gap-2 text-amber-400">
          <AlertTriangle className="w-4 h-4" /> Punto Pendiente de Validación:
        </div>
        <p>
          El Visor 3D figura como opcional en el documento detallado, mientras que en la
          propuesta de justificación figura como parte del alcance. Se definirá formalmente
          antes de emitir la versión contractual definitiva.
        </p>
      </div>
    </div>
  )
}
