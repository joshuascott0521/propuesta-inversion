import { useEffect } from 'react'

const HASH_PREFIX = '#/'

/** Lee la diapositiva inicial del hash (`#/7`) para poder compartir enlaces directos. */
export function readSlideFromHash(total: number): number {
  if (typeof window === 'undefined') return 0
  const raw = window.location.hash.replace(HASH_PREFIX, '')
  const parsed = Number.parseInt(raw, 10)
  if (Number.isNaN(parsed)) return 0
  return Math.min(Math.max(parsed - 1, 0), total - 1)
}

/** Mantiene el hash de la URL en sincronía con la diapositiva activa, en ambos sentidos. */
export function useSlideHash(
  currentSlide: number,
  total: number,
  onHashChange: (index: number) => void,
) {
  useEffect(() => {
    const target = `${HASH_PREFIX}${currentSlide + 1}`
    if (window.location.hash !== target) {
      window.history.replaceState(null, '', target)
    }
  }, [currentSlide])

  useEffect(() => {
    const handle = () => onHashChange(readSlideFromHash(total))
    window.addEventListener('hashchange', handle)
    return () => window.removeEventListener('hashchange', handle)
  }, [total, onHashChange])
}
