import type { ComponentType } from 'react'
import type { SlideType } from '../types'

import HeroNodes from './HeroNodes'
import ProcessFlow from './ProcessFlow'
import BeforeAfter from './BeforeAfter'
import MatrixValue from './MatrixValue'
import FivePillars from './FivePillars'
import DevTable from './DevTable'
import EditorDeepDive from './EditorDeepDive'
import MarginEngine from './MarginEngine'
import ProductionProtection from './ProductionProtection'
import InfraSecurity from './InfraSecurity'
import KpiValue from './KpiValue'
import RecurrentCosts from './RecurrentCosts'
import OptionalsRoadmap from './OptionalsRoadmap'
import ExternalCosts from './ExternalCosts'
import OwnershipMap from './OwnershipMap'
import FinancialSummary from './FinancialSummary'
import FivePillarsValue from './FivePillarsValue'
import MilestonesTimeline from './MilestonesTimeline'
import ClosingValue from './ClosingValue'
import NextSteps from './NextSteps'
import FaqBackup from './FaqBackup'

/**
 * Cada `SlideType` declarado en types.ts debe tener aquí su componente:
 * el `Record` completo hace que TypeScript falle si se agrega un tipo sin layout.
 */
export const SLIDE_COMPONENTS: Record<SlideType, ComponentType> = {
  hero_nodes: HeroNodes,
  process_flow: ProcessFlow,
  before_after: BeforeAfter,
  matrix_value: MatrixValue,
  five_pillars: FivePillars,
  dev_table: DevTable,
  editor_deep_dive: EditorDeepDive,
  margin_engine: MarginEngine,
  production_protection: ProductionProtection,
  infra_security: InfraSecurity,
  kpi_value: KpiValue,
  recurrent_costs: RecurrentCosts,
  optionals_roadmap: OptionalsRoadmap,
  external_costs: ExternalCosts,
  ownership_map: OwnershipMap,
  financial_summary: FinancialSummary,
  five_pillars_value: FivePillarsValue,
  milestones_timeline: MilestonesTimeline,
  closing_value: ClosingValue,
  next_steps: NextSteps,
  faq_backup: FaqBackup,
}
