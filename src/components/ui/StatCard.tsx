import type { ReactNode } from 'react'

interface StatCardProps {
  label: string
  value: string
  sub?: string
  icon: ReactNode
  accent: string
}

export function StatCard({ label, value, sub, icon, accent }: StatCardProps) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-surface-card p-5 shadow-card">
      <div className="absolute left-0 top-0 h-0.5 w-full" style={{ backgroundColor: accent }} />
      <div
        className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg"
        style={{ backgroundColor: `${accent}15`, color: accent }}
      >
        {icon}
      </div>
      <p className="font-mono text-2xl font-bold text-content-primary">{value}</p>
      <p className="mt-0.5 text-xs font-medium text-content-secondary">{label}</p>
      {sub && <p className="mt-1 text-xs text-content-faint">{sub}</p>}
    </div>
  )
}
