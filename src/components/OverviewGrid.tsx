import { X } from 'lucide-react'
import type { Slide } from '../types'

/** Mapa de miniaturas para saltar a cualquier diapositiva. */
export default function OverviewGrid({
  slides,
  currentSlide,
  onSelect,
  onClose,
}: {
  slides: Slide[]
  currentSlide: number
  onSelect: (index: number) => void
  onClose: () => void
}) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mapa completo de diapositivas"
      className="fixed inset-0 bg-slate-950/90 backdrop-blur-lg z-50 p-6 overflow-y-auto flex flex-col space-y-6"
    >
      <div className="flex justify-between items-center border-b border-slate-800 pb-4 max-w-6xl mx-auto w-full">
        <div>
          <h2 className="text-xl font-bold text-white">Mapa Completo de Diapositivas</h2>
          <p className="text-xs text-slate-400">
            Selecciona cualquier diapositiva para navegar de inmediato
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar mapa de diapositivas"
          className="p-2 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-white cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto w-full">
        {slides.map((s, idx) => (
          <button
            type="button"
            key={s.id}
            onClick={() => onSelect(idx)}
            aria-current={idx === currentSlide}
            className={`p-3 rounded-xl border cursor-pointer transition-all flex flex-col justify-between gap-2 h-32 text-left ${
              idx === currentSlide
                ? 'bg-cyan-950/60 border-cyan-500 ring-2 ring-cyan-500/30'
                : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="flex justify-between items-center gap-2 text-[10px] font-mono text-cyan-400 w-full">
              <span>#{s.id}</span>
              <span className="truncate text-slate-500">{s.tag}</span>
            </div>
            <div className="font-bold text-xs text-slate-200 line-clamp-2 leading-snug">
              {s.title}
            </div>
            <div className="text-[10px] text-slate-400 truncate w-full">{s.subtitle}</div>
          </button>
        ))}
      </div>
    </div>
  )
}
