import type { ColDef } from 'ag-grid-community'
import type { Employee } from '@/types'
import { formatDate } from '@/utils'
import { EmployeeCell }   from './renderers/EmployeeCell'
import { DepartmentCell } from './renderers/DepartmentCell'
import { StatusCell }     from './renderers/StatusCell'
import { RatingCell }     from './renderers/RatingCell'
import { SalaryCell }     from './renderers/SalaryCell'
import { SkillsCell }     from './renderers/SkillsCell'

export const columnDefs: ColDef<Employee>[] = [
  {
    field: 'firstName',
    headerName: 'Employee',
    cellRenderer: EmployeeCell,
    minWidth: 220,
    flex: 2,
    pinned: 'left',
    filter: 'agTextColumnFilter',
    valueGetter: (p) => p.data ? `${p.data.firstName} ${p.data.lastName}` : '',
  },
  {
    field: 'department',
    headerName: 'Department',
    cellRenderer: DepartmentCell,
    minWidth: 140,
    filter: 'agTextColumnFilter',
  },
  {
    field: 'position',
    headerName: 'Position',
    minWidth: 180,
    flex: 1,
    filter: 'agTextColumnFilter',
  },
  {
    field: 'salary',
    headerName: 'Salary',
    cellRenderer: SalaryCell,
    minWidth: 130,
    filter: 'agNumberColumnFilter',
    sort: 'desc',
  },
  {
    field: 'performanceRating',
    headerName: 'Performance',
    cellRenderer: RatingCell,
    minWidth: 160,
    filter: 'agNumberColumnFilter',
  },
  {
    field: 'isActive',
    headerName: 'Status',
    cellRenderer: StatusCell,
    minWidth: 110,
  },
  {
    field: 'location',
    headerName: 'Location',
    minWidth: 130,
    filter: 'agTextColumnFilter',
  },
  {
    field: 'hireDate',
    headerName: 'Hire Date',
    minWidth: 130,
    valueFormatter: (p) => formatDate(p.value),
    filter: 'agDateColumnFilter',
  },
  {
    field: 'skills',
    headerName: 'Skills',
    cellRenderer: SkillsCell,
    minWidth: 180,
    sortable: false,
    filter: false,
  },
  {
    field: 'manager',
    headerName: 'Manager',
    minWidth: 150,
    filter: 'agTextColumnFilter',
    valueFormatter: (p) => p.value ?? '—',
  },
]
