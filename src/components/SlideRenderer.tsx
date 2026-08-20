import type { Slide } from '../types'
import { SLIDE_COMPONENTS } from '../slides'

/** Resuelve el layout de una diapositiva a partir de su `type`. */
export default function SlideRenderer({ slide }: { slide: Slide }) {
  const Body = SLIDE_COMPONENTS[slide.type]

  if (!Body) {
    return (
      <div className="text-center text-sm text-slate-400">
        No hay un diseño registrado para el tipo «{slide.type}».
      </div>
    )
  }

  return <Body />
}
