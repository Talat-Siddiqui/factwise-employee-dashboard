import type { ICellRendererParams } from 'ag-grid-community'
import type { Employee } from '@/types'
import { Badge } from '@/components/ui/Badge'

export function StatusCell({ value }: ICellRendererParams<Employee>) {
  return <Badge label={value ? 'Active' : 'Inactive'} variant={value ? 'success' : 'danger'} />
}
