import type { ICellRendererParams } from 'ag-grid-community'
import type { Employee } from '@/types'

export function SkillsCell({ value }: ICellRendererParams<Employee>) {
  if (!value?.length) return null
  const skills = value as string[]

  return (
    <div className="flex flex-wrap gap-1">
      {skills.slice(0, 2).map((skill) => (
        <span key={skill} className="rounded bg-surface-muted px-1.5 py-0.5 text-xs text-content-secondary">
          {skill}
        </span>
      ))}
      {skills.length > 2 && (
        <span className="text-xs text-content-faint">+{skills.length - 2}</span>
      )}
    </div>
  )
}
