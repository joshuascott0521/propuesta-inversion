import { SectionIntro } from '../components/ui'

const ROWS = [
  {
    current: 'Cotización manual paso a paso',
    sol: 'Motor de cotización',
    val: 'Tiempo ahorrado y consistencia comercial',
  },
  {
    current: 'Diseño mediante constante intercambio de mensajes',
    sol: 'Editor interactivo',
    val: 'Experiencia de autoservicio para el cliente',
  },
  {
    current: 'Errores frecuentes en archivos de impresión',
    sol: 'Motor de impresión',
    val: 'Reducción directa de reprocesos y mermas',
  },
  {
    current: 'Conocimiento concentrado en pocas personas',
    sol: 'Catálogo estructurado',
    val: 'Estandarización de reglas e insumos',
  },
  {
    current: 'Transcripción manual a órdenes de producción',
    sol: 'Panel de producción',
    val: 'Eliminación de errores de interpretación',
  },
  {
    current: 'Procesos manuales fragmentados',
    sol: 'Automatización global',
    val: 'Eficiencia operativa y escalabilidad',
  },
  {
    current: 'Falta de trazabilidad del pedido',
    sol: 'Gestión estructurada',
    val: 'Control y visibilidad completa del estado',
  },
]

export default function MatrixValue() {
  return (
    <div className="space-y-4">
      <SectionIntro
        size="sm"
        title="Matriz de Transformación"
        subtitle="Cada módulo tecnológico resuelve un dolor específico y entrega un valor directo al negocio"
      />

      <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/60 shadow-lg">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-slate-800 bg-slate-950/90 text-slate-400 font-bold uppercase tracking-wider">
              <th scope="col" className="py-3 px-4 text-red-400 w-1/3">
                Situación Actual
              </th>
              <th scope="col" className="py-3 px-4 text-cyan-400 w-1/3">
                Solución Tecnológica
              </th>
              <th scope="col" className="py-3 px-4 text-emerald-400 w-1/3">
                Valor Generado
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 text-slate-200">
            {ROWS.map((row) => (
              <tr key={row.current} className="hover:bg-slate-800/40 transition-colors">
                <td className="py-2.5 px-4 text-slate-300 font-medium">{row.current}</td>
                <td className="py-2.5 px-4 font-bold text-cyan-300">{row.sol}</td>
                <td className="py-2.5 px-4 text-emerald-300 font-medium">{row.val}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
