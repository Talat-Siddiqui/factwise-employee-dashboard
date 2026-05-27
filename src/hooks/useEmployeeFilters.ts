import { useState, useMemo } from 'react'
import employees from '@/data/employees'
import type { Department } from '@/types'

export function useEmployeeFilters() {
  const [search, setSearch] = useState('')
  const [department, setDepartment] = useState<Department | 'All'>('All')
  const [activeOnly, setActiveOnly] = useState(false)

  const filtered = useMemo(() => {
    return employees.filter((emp) => {
      if (activeOnly && !emp.isActive) return false
      if (department !== 'All' && emp.department !== department) return false

      if (search.trim()) {
        const q = search.toLowerCase()
        return (
          emp.firstName.toLowerCase().includes(q) ||
          emp.lastName.toLowerCase().includes(q) ||
          emp.email.toLowerCase().includes(q) ||
          emp.position.toLowerCase().includes(q) ||
          emp.location.toLowerCase().includes(q)
        )
      }

      return true
    })
  }, [search, department, activeOnly])

  return {
    filtered,
    total: employees.length,
    search,
    setSearch,
    department,
    setDepartment,
    activeOnly,
    setActiveOnly,
  }
}
