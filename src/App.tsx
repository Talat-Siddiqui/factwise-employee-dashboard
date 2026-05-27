import { useCallback } from 'react'
import { Download } from 'lucide-react'

import { StatsRow }     from '@/components/charts/StatsRow'
import { ChartsRow }    from '@/components/charts/ChartsRow'
import { GridToolbar }  from '@/components/grid/GridToolbar'
import { EmployeeGrid } from '@/components/grid/EmployeeGrid'

import { useEmployeeFilters } from '@/hooks/useEmployeeFilters'
import { exportToCSV } from '@/utils'

import employees from '@/data/employees'

export default function App() {
  const {
    filtered,
    total,
    search,
    setSearch,
    department,
    setDepartment,
    activeOnly,
    setActiveOnly,
  } = useEmployeeFilters()

  const handleExport = useCallback(() => {
    exportToCSV(filtered)
  }, [filtered])

  return (
    <div className="min-h-screen bg-surface-page">

      <header className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-surface-card px-4 py-3 sm:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-brand">
            <span className="text-xs font-bold text-white">FW</span>
          </div>
          <div>
            <h1 className="text-sm font-semibold text-content-primary">
              Employee Dashboard
            </h1>
            <p className="text-xs text-content-faint">
              {filtered.length} of {total} employees
            </p>
          </div>
        </div>

        <button
          onClick={handleExport}
          className="flex items-center gap-1.5 rounded-lg bg-brand px-3 py-2 text-xs font-medium text-white transition-opacity hover:opacity-90"
        >
          <Download size={13} />
          <span className="hidden sm:inline">Export CSV</span>
          <span className="sm:hidden">Export</span>
        </button>
      </header>

      <main className="flex flex-col gap-5 p-4 sm:p-8">
        <StatsRow employees={employees} />

        <ChartsRow employees={employees} />

        <GridToolbar
          search={search}
          onSearchChange={setSearch}
          department={department}
          onDepartmentChange={setDepartment}
          activeOnly={activeOnly}
          onActiveOnlyChange={setActiveOnly}
          visibleCount={filtered.length}
          totalCount={total}
        />

        <div className="overflow-x-auto rounded-xl border border-border shadow-card-md">
          <div style={{ minWidth: 700, height: 480 }}>
            <EmployeeGrid rows={filtered} />
          </div>
        </div>
      </main>
    </div>
  )
}
