import { useMemo } from 'react'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'

import { columnDefs } from './columnDefs'
import { ROW_HEIGHT, PAGE_SIZE } from '@/constants'
import type { Employee } from '@/types'

export function EmployeeGrid({ rows }: { rows: Employee[] }) {
  const defaultColDef = useMemo(
    () => ({ sortable: true, resizable: true, filter: true }),
    []
  )

  return (
    <div className="ag-theme-alpine h-full w-full">
      <AgGridReact
        rowData={rows}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        rowHeight={ROW_HEIGHT}
        headerHeight={42}
        pagination
        paginationPageSize={PAGE_SIZE}
        rowSelection="multiple"
        suppressRowClickSelection
        animateRows
        overlayNoRowsTemplate="<span style='color:#9ca3af;font-size:14px'>No employees match your filters</span>"
      />
    </div>
  )
}
