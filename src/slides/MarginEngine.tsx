import { Fragment } from 'react'
import { SectionIntro } from '../components/ui'

const FORMULA_TERMS = [
  'Producto Base',
  'Técnica Impresión',
  'Escala Cantidad',
  'Variables Comerciales',
]

const RULES = [
  'Matriz compleja de tarifas por técnicas y volumen.',
  'Reglas de cálculo autoritativas desde el servidor (no manipulables en navegador).',
  'Matriz de tallas y recargos por acabados especiales.',
  'Aplicación de promociones, reglas de cupones y validación en vivo.',
]

export default function MarginEngine() {
  return (
    <div className="space-y-6">
      <SectionIntro
        title="Protección del Margen Comercial"
        subtitle="El motor de cotización elimina la variabilidad humana y asegura la rentabilidad de cada venta"
      />

      <div className="p-6 bg-slate-900/80 border border-slate-800 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 text-center">
        {FORMULA_TERMS.map((term, i) => (
          <Fragment key={term}>
            <div className="p-3 bg-slate-800 rounded-xl text-slate-200 font-mono text-xs w-full md:w-auto">
              [ {term} ]
            </div>
            {i < FORMULA_TERMS.length - 1 && (
              <span className="text-cyan-400 font-bold" aria-hidden="true">
                +
              </span>
            )}
          </Fragment>
        ))}
        <span className="text-emerald-400 font-bold text-xl font-mono" aria-hidden="true">
          =
        </span>
        <div className="p-4 bg-emerald-950/60 border border-emerald-500/50 rounded-xl text-emerald-300 font-bold text-sm w-full md:w-auto">
          PRECIO PROTEGIDO
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-xl space-y-2">
          <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
            Capacidades Incorporadas
          </h4>
          <ul className="text-xs text-slate-300 space-y-1.5">
            {RULES.map((rule) => (
              <li key={rule} className="flex items-start gap-2">
                <span aria-hidden="true">•</span>
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-xl space-y-2">
          <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
            Objetivo de Negocio
          </h4>
          <p className="text-xs text-slate-300 leading-relaxed">
            Centralizar el 100% de las reglas comerciales evita vender por debajo del costo
            real debido a equivocaciones al calcular insumos o técnicas complejas.
          </p>
        </div>
      </div>
    </div>
  )
}
