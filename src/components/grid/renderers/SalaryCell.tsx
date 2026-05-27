import type { ICellRendererParams } from 'ag-grid-community'
import type { Employee } from '@/types'
import { formatCurrency } from '@/utils'

export function SalaryCell({ value }: ICellRendererParams<Employee>) {
  if (value == null) return null
  return (
    <span className="font-mono text-sm text-content-secondary">
      {formatCurrency(value)}
    </span>
  )
}
