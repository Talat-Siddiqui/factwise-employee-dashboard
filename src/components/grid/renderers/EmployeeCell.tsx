import type { ICellRendererParams } from 'ag-grid-community'
import type { Employee } from '@/types'
import { Avatar } from '@/components/ui/Avatar'

export function EmployeeCell({ data }: ICellRendererParams<Employee>) {
  if (!data) return null
  return (
    <div className="flex items-center gap-2.5">
      <Avatar firstName={data.firstName} lastName={data.lastName} id={data.id} />
      <div className="min-w-0">
        <p className="truncate text-sm font-semibold text-content-primary">
          {data.firstName} {data.lastName}
        </p>
        <p className="truncate text-xs text-content-muted">{data.email}</p>
      </div>
    </div>
  )
}
