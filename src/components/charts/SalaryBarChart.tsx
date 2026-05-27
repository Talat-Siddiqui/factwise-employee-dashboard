import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

interface ChartItem {
  name: string
  avgSalary: number
}

function formatK(value: number) {
  return `$${Math.round(value / 1000)}k`
}

function ChartTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null
  return (
    <div className="rounded-lg border border-border bg-surface-card px-3 py-2 text-xs shadow-card">
      <p className="mb-1 font-medium text-content-primary">{label}</p>
      <p className="text-content-muted">
        Avg salary: <span className="font-medium text-content-primary">{formatK(payload[0].value)}</span>
      </p>
    </div>
  )
}

export function SalaryBarChart({ data }: { data: ChartItem[] }) {
  return (
    <div className="rounded-xl border border-border bg-surface-card p-5 shadow-card">
      <p className="mb-0.5 text-sm font-semibold text-content-primary">Avg salary by department</p>
      <p className="mb-4 text-xs text-content-faint">Compensation overview</p>
      <ResponsiveContainer width="100%" height={160}>
        <BarChart data={data} barSize={28}>
          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#9ca3af' }} />
          <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#9ca3af' }} tickFormatter={formatK} />
          <Tooltip content={<ChartTooltip />} cursor={{ fill: 'rgba(0,0,0,0.02)' }} />
          <Bar dataKey="avgSalary" fill="#4f46e5" fillOpacity={0.8} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
