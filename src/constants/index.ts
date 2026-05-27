import type { Department } from '@/types'

export const DEPARTMENTS: Department[] = [
  'Engineering',
  'Marketing',
  'Sales',
  'HR',
  'Finance',
]

export const DEPT_COLOR_MAP: Record<Department, string> = {
  Engineering: '#4f46e5',
  Marketing:   '#7c3aed',
  Sales:       '#0891b2',
  HR:          '#d97706',
  Finance:     '#059669',
}

export const PAGE_SIZE = 10
export const ROW_HEIGHT = 56
