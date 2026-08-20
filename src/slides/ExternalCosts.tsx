import { Callout, SectionIntro } from '../components/ui'

const COSTS = [
  {
    title: 'Fotografía de Producto',
    cost: '$300.000 – $600.000',
    unit: 'por sesión',
    desc: 'Producción de material gráfico de alta resolución de prendas base.',
  },
  {
    title: 'Modelos 3D',
    cost: '$40.000 – $160.000',
    unit: 'por producto',
    desc: 'Modelado tridimensional en caso de incluir visor 3D.',
  },
  {
    title: 'Fuentes Comerciales',
    cost: 'Costo Variable',
    unit: 'según licencia',
    desc: 'Licenciamiento comercial de tipografías específicas elegidas.',
  },
  {
    title: 'Tiempo del Cliente',
    cost: '20 – 30 Horas',
    unit: 'durante el proyecto',
    desc: 'Aportes en homologación de catálogo y pruebas de usuario.',
  },
]

export default function ExternalCosts() {
  return (
    <div className="space-y-6">
      <SectionIntro
        title="Transparencia en Costos Externos"
        subtitle="Insumos y servicios requeridos para operación no incluidos en la cotización de software"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {COSTS.map((c) => (
          <div
            key={c.title}
            className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 flex flex-col justify-between space-y-3"
          >
            <div>
              <div className="text-xs font-bold text-slate-300">{c.title}</div>
              <div className="text-lg font-black font-mono text-cyan-400 mt-1">{c.cost}</div>
              <div className="text-[10px] text-slate-400 font-mono">{c.unit}</div>
            </div>
            <div className="text-[11px] text-slate-400 border-t border-slate-800 pt-2">
              {c.desc}
            </div>
          </div>
        ))}
      </div>

      <Callout>
        <strong className="text-cyan-400">Garantía Consultiva:</strong> Declarar explícitamente
        estos rubros evita sorpresas financieras durante la fase de ejecución.
      </Callout>
    </div>
  )
}
