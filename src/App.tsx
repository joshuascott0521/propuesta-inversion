import { useCallback, useEffect, useState } from 'react'
import {
  ChevronLeft,
  ChevronRight,
  Cpu,
  Grid,
  Maximize2,
  Mic,
  Minimize2,
} from 'lucide-react'
import { SLIDES } from './data/slides'
import SlideRenderer from './components/SlideRenderer'
import SpeakerNotes from './components/SpeakerNotes'
import OverviewGrid from './components/OverviewGrid'
import { useFullscreen } from './hooks/useFullscreen'
import { readSlideFromHash, useSlideHash } from './hooks/useSlideHash'

const TOTAL = SLIDES.length
const NEXT_KEYS = ['ArrowRight', 'PageDown', ' ']
const PREV_KEYS = ['ArrowLeft', 'PageUp']

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(() => readSlideFromHash(TOTAL))
  const [showNotes, setShowNotes] = useState(false)
  const [showOverview, setShowOverview] = useState(false)
  const { isFullscreen, toggleFullscreen } = useFullscreen()

  const slide = SLIDES[currentSlide]

  const goTo = useCallback((index: number) => {
    setCurrentSlide(Math.min(Math.max(index, 0), TOTAL - 1))
  }, [])

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, TOTAL - 1))
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0))
  }, [])

  useSlideHash(currentSlide, TOTAL, goTo)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowOverview(false)
        setShowNotes(false)
        return
      }
      // Con el mapa de diapositivas abierto, las flechas no deben mover el fondo.
      if (showOverview) return

      if (NEXT_KEYS.includes(e.key)) {
        e.preventDefault()
        nextSlide()
      } else if (PREV_KEYS.includes(e.key)) {
        e.preventDefault()
        prevSlide()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [nextSlide, prevSlide, showOverview])

  return (
    <div className="w-screen h-dvh bg-slate-950 text-slate-100 flex flex-col justify-between font-sans overflow-hidden select-none">
      <header className="h-14 px-4 sm:px-6 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md flex items-center justify-between gap-3 z-20 shrink-0">
        <div className="flex items-center gap-3">
          <div className="p-1.5 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-lg text-white">
            <Cpu className="w-4 h-4" />
          </div>
          <div>
            <span className="font-extrabold text-xs tracking-wider text-slate-100 uppercase block">
              Propuesta Ejecutiva
            </span>
            <span className="text-[10px] text-slate-400 block font-mono">
              Inversión &amp; Valor de la Plataforma
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-slate-900 border border-slate-800 rounded-full text-xs font-semibold text-cyan-400">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" aria-hidden="true" />
          {slide.tag}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowNotes((v) => !v)}
            aria-pressed={showNotes}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 border transition-all cursor-pointer ${
              showNotes
                ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-300'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
            title="Notas del presentador"
          >
            <Mic className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Guion</span>
          </button>

          <button
            type="button"
            onClick={() => setShowOverview((v) => !v)}
            aria-pressed={showOverview}
            className="p-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-slate-200 transition-all cursor-pointer"
            title="Vista de miniaturas"
          >
            <Grid className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={toggleFullscreen}
            className="p-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-slate-200 transition-all cursor-pointer"
            title={isFullscreen ? 'Salir de pantalla completa' : 'Pantalla completa'}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </header>

      <div
        className="w-full h-1 bg-slate-900 relative shrink-0"
        role="progressbar"
        aria-valuemin={1}
        aria-valuemax={TOTAL}
        aria-valuenow={currentSlide + 1}
        aria-label="Progreso de la presentación"
      >
        <div
          className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / TOTAL) * 100}%` }}
        />
      </div>

      <main className="flex-1 relative p-4 sm:p-10 flex overflow-y-auto">
        {/* `m-auto` centra el contenido cuando cabe y evita que se recorte por arriba cuando no. */}
        <div className="w-full max-w-5xl space-y-6 m-auto">
          <div className="border-b border-slate-800/60 pb-4 flex flex-col sm:flex-row justify-between sm:items-end gap-2">
            <div>
              <span className="text-xs font-bold font-mono text-cyan-400 uppercase tracking-widest block mb-1">
                DIAPOSITIVA {currentSlide + 1} DE {TOTAL}
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {slide.title}
              </h1>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">{slide.subtitle}</p>
            </div>

            <div className="bg-slate-900/90 border border-slate-800 px-3 py-1.5 rounded-xl max-w-xs text-right hidden lg:block">
              <span className="text-[10px] text-slate-400 uppercase font-bold block">
                Objetivo Estratégico
              </span>
              <span className="text-[11px] text-cyan-200 font-medium leading-tight block">
                {slide.objective}
              </span>
            </div>
          </div>

          <div className="min-h-[380px] flex flex-col justify-center">
            <SlideRenderer slide={slide} />
          </div>
        </div>
      </main>

      <footer className="h-16 px-4 sm:px-6 border-t border-slate-800/80 bg-slate-950/90 backdrop-blur-md flex items-center justify-between gap-3 z-20 shrink-0">
        <div className="text-xs font-mono text-slate-500">
          Diapositiva {currentSlide + 1} / {TOTAL}
        </div>

        <nav
          aria-label="Ir a una diapositiva"
          className="hidden sm:flex items-center gap-1.5 max-w-md overflow-x-auto py-2"
        >
          {SLIDES.map((s, idx) => (
            <button
              type="button"
              key={s.id}
              onClick={() => goTo(idx)}
              aria-label={`Diapositiva ${idx + 1}: ${s.title}`}
              aria-current={idx === currentSlide}
              className={`h-2 rounded-full transition-all cursor-pointer shrink-0 ${
                idx === currentSlide ? 'bg-cyan-400 w-6' : 'bg-slate-800 hover:bg-slate-600 w-2'
              }`}
            />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs font-bold flex items-center gap-1 disabled:opacity-30 disabled:cursor-default hover:bg-slate-800 transition-all cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" /> Anterior
          </button>
          <button
            type="button"
            onClick={nextSlide}
            disabled={currentSlide === TOTAL - 1}
            className="px-5 py-2 bg-cyan-600 text-white rounded-xl text-xs font-bold flex items-center gap-1 disabled:opacity-30 disabled:cursor-default hover:bg-cyan-500 transition-all shadow-lg shadow-cyan-600/20 cursor-pointer"
          >
            Siguiente <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </footer>

      {showNotes && <SpeakerNotes slide={slide} onClose={() => setShowNotes(false)} />}

      {showOverview && (
        <OverviewGrid
          slides={SLIDES}
          currentSlide={currentSlide}
          onSelect={(idx) => {
            goTo(idx)
            setShowOverview(false)
          }}
          onClose={() => setShowOverview(false)}
        />
      )}
    </div>
  )
}
