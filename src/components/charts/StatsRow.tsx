import { Users, DollarSign, Star, Briefcase } from 'lucide-react'
import { StatCard } from '@/components/ui/StatCard'
import { computeStats, formatCurrency } from '@/utils'
import type { Employee } from '@/types'

export function StatsRow({ employees }: { employees: Employee[] }) {
  const { active, avgSalary, avgRating, totalProjects } = computeStats(employees)

  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
      <StatCard label="Total employees" value={String(employees.length)} sub={`${active} active`} icon={<Users size={18} />} accent="#4f46e5" />
      <StatCard label="Avg salary" value={formatCurrency(avgSalary)} icon={<DollarSign size={18} />} accent="#7c3aed" />
      <StatCard label="Avg performance" value={avgRating.toFixed(2)} sub="out of 5.0" icon={<Star size={18} />} accent="#0891b2" />
      <StatCard label="Total projects" value={String(totalProjects)} icon={<Briefcase size={18} />} accent="#059669" />
    </div>
  )
}
