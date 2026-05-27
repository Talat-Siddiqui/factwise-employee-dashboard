import type { ICellRendererParams } from 'ag-grid-community'
import type { Employee, Department } from '@/types'
import { Badge } from '@/components/ui/Badge'

type DeptVariant = 'engineering' | 'marketing' | 'sales' | 'hr' | 'finance'

const variantMap: Record<Department, DeptVariant> = {
  Engineering: 'engineering',
  Marketing:   'marketing',
  Sales:       'sales',
  HR:          'hr',
  Finance:     'finance',
}

export function DepartmentCell({ value }: ICellRendererParams<Employee>) {
  if (!value) return null
  return <Badge label={value} variant={variantMap[value as Department]} />
}
