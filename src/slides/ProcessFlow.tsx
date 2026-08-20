import {
  Database,
  DollarSign,
  FileText,
  Layout,
  Server,
  ShieldCheck,
  Sliders,
  Workflow,
  Zap,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { SectionIntro } from '../components/ui'

const STEPS = [
  { step: '01', label: 'Cliente', desc: 'Inicio de solicitud' },
  { step: '02', label: 'Personalización', desc: 'Editor interactivo' },
  { step: '03', label: 'Cotización', desc: 'Reglas de precio' },
  { step: '04', label: 'Compra', desc: 'Pasarela / Checkout' },
  { step: '05', label: 'Producción', desc: 'Asignación técnica' },
  { step: '06', label: 'Archivo Técnico', desc: 'Generación motor' },
  { step: '07', label: 'Entrega', desc: 'Despacho final' },
]

const COMPONENTS: { name: string; icon: LucideIcon; desc: string }[] = [
  {
    name: 'Tienda E-Commerce',
    icon: Layout,
    desc: 'Catálogo interactivo y experiencia de compra limpia.',
  },
  {
    name: 'Editor de Personalización',
    icon: Sliders,
    desc: 'Posicionamiento, textos, logos y validaciones visuales.',
  },
  {
    name: 'Motor de Cotización',
    icon: DollarSign,
    desc: 'Cálculos autoritativos de precio, tallas y escala.',
  },
  {
    name: 'Catálogo de Productos',
    icon: Database,
    desc: 'Estructura estandarizada de prendas, técnicas e insumos.',
  },
  {
    name: 'Panel de Producción',
    icon: Workflow,
    desc: 'Trazabilidad, órdenes de trabajo y control de estados.',
  },
  {
    name: 'Motor de Impresión',
    icon: FileText,
    desc: 'Generación automatizada de archivos técnicos listos para taller.',
  },
  {
    name: 'Infraestructura & Seguridad',
    icon: Server,
    desc: 'Servidores separados, respaldos y monitoreo activo.',
  },
  {
    name: 'Integraciones Externas',
    icon: Zap,
    desc: 'Wompi, pasarelas de pago y logística de envíos.',
  },
  {
    name: 'Gestión y Trazabilidad',
    icon: ShieldCheck,
    desc: 'Control de pedido punta a punta sin vacíos.',
  },
]

export default function ProcessFlow() {
  return (
    <div className="space-y-6">
      <SectionIntro
        title="Recorrido End-to-End del Pedido"
        subtitle="Flujo continuo de información integrada desde el cliente hasta la entrega física"
      />

      <div className="grid grid-cols-2 sm:grid-cols-7 gap-2 my-4">
        {STEPS.map((st) => (
          <div
            key={st.step}
            className="relative bg-slate-900/80 border border-slate-800 rounded-xl p-3 flex flex-col justify-between hover:border-cyan-500/50 transition-all group"
          >
            <div className="text-[10px] font-mono text-cyan-400 font-bold">{st.step}</div>
            <div className="font-bold text-slate-100 text-sm my-1 group-hover:text-cyan-300">
              {st.label}
            </div>
            <div className="text-[10px] text-slate-400 leading-tight">{st.desc}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {COMPONENTS.map((c) => (
          <div
            key={c.name}
            className="bg-slate-900/40 border border-slate-800/80 rounded-lg p-3.5 flex items-start gap-3"
          >
            <div className="p-2 bg-slate-800 text-cyan-400 rounded-lg mt-0.5">
              <c.icon className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-200">{c.name}</h4>
              <p className="text-[11px] text-slate-400 mt-0.5">{c.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
