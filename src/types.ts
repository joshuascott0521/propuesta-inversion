/** Identificador del layout que renderiza el cuerpo de cada diapositiva. */
export type SlideType =
  | 'hero_nodes'
  | 'process_flow'
  | 'before_after'
  | 'matrix_value'
  | 'five_pillars'
  | 'dev_table'
  | 'editor_deep_dive'
  | 'margin_engine'
  | 'production_protection'
  | 'infra_security'
  | 'kpi_value'
  | 'recurrent_costs'
  | 'optionals_roadmap'
  | 'external_costs'
  | 'ownership_map'
  | 'financial_summary'
  | 'five_pillars_value'
  | 'milestones_timeline'
  | 'closing_value'
  | 'next_steps'
  | 'faq_backup'

export interface Slide {
  /** Número de diapositiva, 1-based. */
  id: number
  /** Etiqueta corta de sección mostrada en la cabecera. */
  tag: string
  title: string
  subtitle: string
  /** Objetivo estratégico visible en el guion del presentador. */
  objective: string
  /** Texto sugerido para narrar la diapositiva. */
  presenterScript: string
  type: SlideType
}
