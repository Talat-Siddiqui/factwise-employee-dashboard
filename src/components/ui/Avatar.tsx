import { getInitials } from '@/utils'

interface AvatarProps {
  firstName: string
  lastName: string
  id: number
}

const colors = [
  'bg-indigo-600',
  'bg-violet-600',
  'bg-blue-600',
  'bg-teal-600',
  'bg-rose-600',
  'bg-amber-600',
]

export function Avatar({ firstName, lastName, id }: AvatarProps) {
  const color = colors[id % colors.length]
  return (
    <span className={`inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-xs font-semibold text-white ${color}`}>
      {getInitials(firstName, lastName)}
    </span>
  )
}
