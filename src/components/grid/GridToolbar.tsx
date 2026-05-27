import { Search, Users } from 'lucide-react'
import { DEPARTMENTS } from '@/constants'
import { cn } from '@/utils'
import type { Department } from '@/types'

interface GridToolbarProps {
  search: string
  onSearchChange: (val: string) => void
  department: Department | 'All'
  onDepartmentChange: (dept: Department | 'All') => void
  activeOnly: boolean
  onActiveOnlyChange: (val: boolean) => void
  visibleCount: number
  totalCount: number
}

export function GridToolbar({
  search,
  onSearchChange,
  department,
  onDepartmentChange,
  activeOnly,
  onActiveOnlyChange,
  visibleCount,
  totalCount,
}: GridToolbarProps) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-border bg-surface-card px-4 py-3 shadow-card">
      <div className="flex items-center gap-3">
        <div className="relative flex-1">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-content-faint" />
          <input
            type="text"
            placeholder="Search by name, email or location..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full rounded-lg border border-border bg-surface-input py-2 pl-9 pr-3 text-sm text-content-primary placeholder-content-faint outline-none focus:border-brand"
          />
        </div>

        <button
          onClick={() => onActiveOnlyChange(!activeOnly)}
          className={cn(
            'flex flex-shrink-0 items-center gap-1.5 rounded-lg border px-3 py-2 text-xs font-medium transition-colors',
            activeOnly
              ? 'border-brand-border bg-brand-light text-brand-text'
              : 'border-border bg-surface-input text-content-muted hover:text-content-secondary'
          )}
        >
          <Users size={13} />
          Active only
        </button>
      </div>

      <div className="flex items-center gap-3">
        <div className="min-w-0 flex-1 overflow-x-auto">
          <div className="flex w-max gap-1 rounded-lg bg-surface-muted p-1">
            <button
              onClick={() => onDepartmentChange('All')}
              className={cn(
                'rounded-md px-3 py-1 text-xs font-medium transition-colors',
                department === 'All' ? 'bg-brand text-white' : 'text-content-muted hover:text-content-secondary'
              )}
            >
              All
            </button>
            {DEPARTMENTS.map((dept) => (
              <button
                key={dept}
                onClick={() => onDepartmentChange(dept)}
                className={cn(
                  'whitespace-nowrap rounded-md px-3 py-1 text-xs font-medium transition-colors',
                  department === dept ? 'bg-brand text-white' : 'text-content-muted hover:text-content-secondary'
                )}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        <span className="flex-shrink-0 text-xs text-content-faint">
          <span className="font-medium text-content-secondary">{visibleCount}</span>
          {' '}/ {totalCount}
        </span>
      </div>
    </div>
  )
}
