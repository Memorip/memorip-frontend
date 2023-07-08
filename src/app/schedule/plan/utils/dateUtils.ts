export const generateMonthCalendar = (year: number, month: number, startDay: number): Date[] => {
  const startOfMonth = new Date(year, month - 1, 1)

  const endOfMonth = new Date(year, month, 0)

  const startOfWeek = (7 + startOfMonth.getDay() - startDay) % 7

  const endOfWeek = (7 + endOfMonth.getDay() - startDay) % 7

  const startDate = startOfMonth.getDate()
  const endDate = endOfMonth.getDate()

  const days = Array.from({ length: endDate }, (_, i) => {
    return new Date(year, month - 1, i + 1)
  })

  const previousMonthDays = Array.from({ length: startOfWeek }, (_, i) => {
    const date = new Date(year, month - 2, startDate - startOfWeek + i)
    return date
  })

  const nextMonthDays = Array.from({ length: 6 - endOfWeek }, (_, i) => {
    const date = new Date(year, month, endDate + i + 1)
    return date
  })
  return previousMonthDays.concat(days, nextMonthDays)
}
