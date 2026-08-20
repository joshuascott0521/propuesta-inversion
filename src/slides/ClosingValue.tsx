const HIGHLIGHTS = [
  { title: 'CONTROL', desc: 'Infraestructura propia' },
  { title: 'EFICIENCIA', desc: 'Menos tareas manuales' },
  { title: 'SEGURIDAD', desc: 'Archivos garantizados' },
  { title: 'ESCALABILIDAD', desc: 'Crecimiento por módulos' },
  { title: 'AUTOMATIZACIÓN', desc: 'Venta a fabricación' },
]

export default function ClosingValue() {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-6 max-w-3xl mx-auto">
      <div className="space-y-2">
        <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
          Resumen Ejecutivo
        </span>
        <h2 className="text-3xl font-extrabold text-white">
          NO ESTAMOS CONSTRUYENDO UNA TIENDA MÁS.
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 w-full">
        {HIGHLIGHTS.map((item) => (
          <div
            key={item.title}
            className="p-3 bg-slate-900 border border-slate-800 rounded-xl space-y-1"
          >
            <div className="font-bold text-cyan-400 text-xs">{item.title}</div>
            <div className="text-[10px] text-slate-400">{item.desc}</div>
          </div>
        ))}
      </div>

      <blockquote className="p-6 bg-gradient-to-r from-slate-900 via-cyan-950/40 to-slate-900 border border-cyan-500/30 rounded-2xl text-slate-200 text-sm leading-relaxed shadow-2xl">
        “La inversión no está destinada únicamente a crear una tienda online. Está destinada a
        construir un activo tecnológico propio, controlable, escalable y operable, reduciendo la
        dependencia de procesos manuales y proveedores externos.”
      </blockquote>
    </div>
  )
}
