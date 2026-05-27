import type { Employee } from '@/types'

export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(' ')
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value)
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export function getInitials(firstName: string, lastName: string): string {
  return `${firstName[0]}${lastName[0]}`.toUpperCase()
}

export function getRatingColor(rating: number): string {
  if (rating >= 4.5) return '#059669'
  if (rating >= 4.0) return '#d97706'
  return '#dc2626'
}

export function computeStats(employees: Employee[]) {
  const active = employees.filter((e) => e.isActive).length
  const avgSalary = employees.reduce((sum, e) => sum + e.salary, 0) / employees.length
  const avgRating = employees.reduce((sum, e) => sum + e.performanceRating, 0) / employees.length
  const totalProjects = employees.reduce((sum, e) => sum + e.projectsCompleted, 0)
  return { active, avgSalary, avgRating, totalProjects }
}

export function exportToCSV(employees: Employee[]): void {
  const headers = ['Name', 'Email', 'Department', 'Position', 'Salary', 'Hire Date', 'Location', 'Performance', 'Projects', 'Status', 'Manager']
  const rows = employees.map((e) => [
    `${e.firstName} ${e.lastName}`,
    e.email, e.department, e.position, e.salary,
    e.hireDate, e.location, e.performanceRating,
    e.projectsCompleted, e.isActive ? 'Active' : 'Inactive',
    e.manager ?? '-',
  ])

  const csv = [headers, ...rows].map((row) => row.join(',')).join('\n')
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = 'employees.csv'
  link.click()
  URL.revokeObjectURL(url)
}
