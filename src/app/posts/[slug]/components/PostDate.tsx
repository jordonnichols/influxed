import { format, parseISO } from 'date-fns'

export default function PostDate({
  dateString,
}: {
  dateString: string | undefined
}) {
  if (!dateString) return null

  const date = parseISO(dateString)
  return dateString ? (
    <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>
  ) : null
}
