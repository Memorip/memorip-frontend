export function getDatesArray(startDate: string, endDate: string): string[] {
  const datesArray: string[] = []
  const current = new Date(startDate)
  const end = new Date(endDate)

  // eslint-disable-next-line no-unmodified-loop-condition
  while (current <= end) {
    datesArray.push(new Date(current).toISOString())
    current.setDate(current.getDate() + 1)
  }

  return datesArray
}
