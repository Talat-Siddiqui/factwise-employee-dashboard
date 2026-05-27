import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import { DEPT_COLOR_MAP } from '@/constants'
import type { Department } from '@/types'

interface ChartItem {
  name: Department
  count: number
}

function ChartTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null
  return (
    <div className="rounded-lg border border-border bg-surface-card px-3 py-2 text-xs shadow-card">
      <p className="mb-1 font-medium text-content-primary">{label}</p>
      <p className="text-content-muted">
        Headcount: <span className="font-medium text-content-primary">{payload[0].value}</span>
      </p>
    </div>
  )
}

export function DeptBarChart({ data }: { data: ChartItem[] }) {
  return (
    <div className="rounded-xl border border-border bg-surface-card p-5 shadow-card">
      <p className="mb-0.5 text-sm font-semibold text-content-primary">Headcount by department</p>
      <p className="mb-4 text-xs text-content-faint">Team size distribution</p>
      <ResponsiveContainer width="100%" height={160}>
        <BarChart data={data} barSize={28}>
          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#9ca3af' }} />
          <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#9ca3af' }} />
          <Tooltip content={<ChartTooltip />} cursor={{ fill: 'rgba(0,0,0,0.02)' }} />
          <Bar dataKey="count" radius={[4, 4, 0, 0]}>
            {data.map((entry) => (
              <Cell key={entry.name} fill={DEPT_COLOR_MAP[entry.name]} fillOpacity={0.85} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
