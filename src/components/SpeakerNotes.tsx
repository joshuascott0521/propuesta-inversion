import { Mic, X } from 'lucide-react'
import type { Slide } from '../types'

/** Panel flotante con el objetivo y el guion sugerido de la diapositiva activa. */
export default function SpeakerNotes({
  slide,
  onClose,
}: {
  slide: Slide
  onClose: () => void
}) {
  return (
    <aside
      aria-label="Guion del presentador"
      className="fixed bottom-20 right-6 w-96 max-w-[90vw] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-5 z-30 space-y-3 select-text animate-slide-in-bottom"
    >
      <div className="flex justify-between items-center border-b border-slate-800 pb-2">
        <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-wider">
          <Mic className="w-4 h-4" /> Guion del Presentador
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar guion"
          className="text-slate-400 hover:text-white cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-2">
        <div>
          <span className="text-[10px] text-slate-400 uppercase font-bold">
            Objetivo de la Diapositiva:
          </span>
          <p className="text-xs text-slate-300 font-medium italic mt-0.5">{slide.objective}</p>
        </div>
        <div className="border-t border-slate-800/80 pt-2">
          <span className="text-[10px] text-cyan-400 uppercase font-bold">Guion Sugerido:</span>
          <p className="text-xs text-slate-200 leading-relaxed mt-1 bg-slate-950 p-3 rounded-xl border border-slate-800/60 max-h-64 overflow-y-auto">
            “{slide.presenterScript}”
          </p>
        </div>
      </div>
    </aside>
  )
}
