import { getRatingColor } from '@/utils'

interface RatingBarProps {
  value: number
}

export function RatingBar({ value }: RatingBarProps) {
  const pct = Math.round(((value - 3.5) / 1.5) * 100)
  const color = getRatingColor(value)

  return (
    <div className="flex items-center gap-2">
      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-gray-200">
        <div
          className="h-full rounded-full"
          style={{ width: `${pct}%`, backgroundColor: color }}
        />
      </div>
      <span className="font-mono text-xs font-medium" style={{ color }}>
        {value.toFixed(1)}
      </span>
    </div>
  )
}
