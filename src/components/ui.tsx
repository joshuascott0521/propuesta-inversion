import type { ReactNode } from 'react'

/** Encabezado centrado que introduce el cuerpo de una diapositiva. */
export function SectionIntro({
  title,
  subtitle,
  size = 'md',
}: {
  title: string
  subtitle?: string
  size?: 'sm' | 'md'
}) {
  return (
    <div className="text-center max-w-2xl mx-auto space-y-1">
      <h3
        className={`font-bold text-slate-100 ${size === 'sm' ? 'text-lg' : 'text-xl'}`}
      >
        {title}
      </h3>
      {subtitle && <p className="text-xs text-slate-400">{subtitle}</p>}
    </div>
  )
}

const CALLOUT_TONES = {
  neutral: 'bg-slate-900 border-slate-800 text-slate-300',
  cyan: 'bg-cyan-950/30 border-cyan-800/50 text-cyan-200',
  emerald: 'bg-emerald-950/20 border-emerald-800/40 text-emerald-200',
  amber: 'bg-amber-950/20 border-amber-800/40 text-amber-200',
} as const

/** Bloque de mensaje destacado al pie de una diapositiva. */
export function Callout({
  tone = 'neutral',
  align = 'center',
  children,
}: {
  tone?: keyof typeof CALLOUT_TONES
  align?: 'center' | 'left'
  children: ReactNode
}) {
  return (
    <div
      className={`p-4 border rounded-xl text-xs ${CALLOUT_TONES[tone]} ${
        align === 'center' ? 'text-center' : 'text-left'
      }`}
    >
      {children}
    </div>
  )
}

/** Tarjeta base reutilizada por las rejillas de datos. */
export function Card({
  className = '',
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return (
    <div
      className={`bg-slate-900/60 border border-slate-800 rounded-xl p-4 ${className}`}
    >
      {children}
    </div>
  )
}
