interface BadgeProps {
  label: string
  variant: 'engineering' | 'marketing' | 'sales' | 'hr' | 'finance' | 'success' | 'danger' | 'neutral'
}

const variantStyles: Record<BadgeProps['variant'], { background: string; color: string }> = {
  engineering: { background: '#ede9fe', color: '#5b21b6' },
  marketing:   { background: '#fce7f3', color: '#9d174d' },
  sales:       { background: '#cffafe', color: '#0e7490' },
  hr:          { background: '#fef3c7', color: '#92400e' },
  finance:     { background: '#d1fae5', color: '#065f46' },
  success:     { background: '#d1fae5', color: '#065f46' },
  danger:      { background: '#fee2e2', color: '#991b1b' },
  neutral:     { background: '#f3f4f6', color: '#4b5563' },
}

export function Badge({ label, variant }: BadgeProps) {
  const style = variantStyles[variant]
  return (
    <span
      className="inline-flex items-center rounded px-2 py-0.5 text-xs font-medium"
      style={style}
    >
      {label}
    </span>
  )
}
