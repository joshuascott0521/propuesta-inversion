import { DollarSign } from 'lucide-react'

const MODULES = [
  { name: 'Editor de diseño', days: '33,75', list: '$23.625.000', discounted: '$18.900.000' },
  { name: 'Motor de cotización', days: '16,25', list: '$11.375.000', discounted: '$9.100.000' },
  { name: 'Catálogo de productos', days: '12,50', list: '$8.750.000', discounted: '$7.000.000' },
  { name: 'Tienda e integración', days: '12,50', list: '$8.750.000', discounted: '$7.000.000' },
  { name: 'Panel de producción', days: '12,50', list: '$8.750.000', discounted: '$7.000.000' },
  {
    name: 'Infraestructura y seguridad',
    days: '12,50',
    list: '$8.750.000',
    discounted: '$7.000.000',
  },
  { name: 'Motor de impresión', days: '10,00', list: '$7.000.000', discounted: '$5.600.000' },
]

export default function DevTable() {
  return (
    <div className="w-full space-y-4">
      <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/60 shadow-xl">
        <table className="w-full text-left border-collapse text-sm">
          <caption className="sr-only">
            Distribución de días y costos de desarrollo por módulo
          </caption>
          <thead>
            <tr className="border-b border-slate-800 bg-slate-950/80 text-slate-400 font-semibold uppercase tracking-wider">
              <th scope="col" className="py-3.5 px-4">
                Módulo
              </th>
              <th scope="col" className="py-3.5 px-4 text-center">
                Días
              </th>
              <th scope="col" className="py-3.5 px-4 text-right">
                Precio Lista
              </th>
              <th scope="col" className="py-3.5 px-4 text-right text-cyan-400">
                Con Descuento
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 text-slate-200">
            {MODULES.map((m) => (
              <tr key={m.name} className="hover:bg-slate-800/40 transition-colors">
                <td className="py-3 px-4 font-medium text-slate-100">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-500" aria-hidden="true" />
                    {m.name}
                  </span>
                </td>
                <td className="py-3 px-4 text-center text-slate-400 font-mono">{m.days}</td>
                <td className="py-3 px-4 text-right text-slate-400 line-through font-mono">
                  {m.list}
                </td>
                <td className="py-3 px-4 text-right font-semibold text-cyan-300 font-mono">
                  {m.discounted}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-t-2 border-slate-700 bg-slate-950 text-slate-100 font-bold">
              <td className="py-3.5 px-4">TOTALES</td>
              <td className="py-3.5 px-4 text-center font-mono">110 días</td>
              <td className="py-3.5 px-4 text-right font-mono text-slate-400">$77.000.000</td>
              <td className="py-3.5 px-4 text-right font-mono text-cyan-400 text-base">
                $61.600.000
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between p-4 bg-cyan-950/30 border border-cyan-800/50 rounded-xl text-cyan-200 gap-3">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-cyan-500/20 rounded-lg text-cyan-400">
            <DollarSign className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-cyan-400/80 font-bold">
              Valor Total Final (Con IVA 19%)
            </div>
            <div className="text-xs text-slate-400">
              Incluye impuesto sobre las ventas aplicable
            </div>
          </div>
        </div>
        <div className="text-2xl font-black font-mono text-cyan-300 tracking-tight">
          $73.304.000 COP
        </div>
      </div>
    </div>
  )
}
