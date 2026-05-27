import { useMemo } from 'react'
import { DeptBarChart }   from './DeptBarChart'
import { SalaryBarChart } from './SalaryBarChart'
import { DEPARTMENTS }    from '@/constants'
import type { Employee }  from '@/types'

export function ChartsRow({ employees }: { employees: Employee[] }) {
  const deptStats = useMemo(() => {
    return DEPARTMENTS.map((dept) => {
      const group = employees.filter((e) => e.department === dept)
      const avgSalary = group.length
        ? group.reduce((sum, e) => sum + e.salary, 0) / group.length
        : 0
      return { name: dept, count: group.length, avgSalary }
    }).filter((d) => d.count > 0)
  }, [employees])

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <DeptBarChart data={deptStats} />
      <SalaryBarChart data={deptStats} />
    </div>
  )
}
