import type { ICellRendererParams } from 'ag-grid-community'
import type { Employee } from '@/types'
import { RatingBar } from '@/components/ui/RatingBar'

export function RatingCell({ value }: ICellRendererParams<Employee>) {
  if (value == null) return null
  return <RatingBar value={value} />
}
