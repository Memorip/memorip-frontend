import React from 'react'

import dayjs from 'dayjs'

interface CalendarProps {
  numMonths?: 1 | 2 | 3 | 4 | 10 | 20
}

const defaultProps: CalendarProps = {
  numMonths: 20,
}

interface CalendarContextType {
  today: dayjs.Dayjs
  currentMonth: dayjs.Dayjs
  setCurrentMonth: (num: number) => void
  calendarSettings: CalendarProps
}

const initialContextValue: CalendarContextType = {
  today: dayjs(),
  currentMonth: dayjs(),
  setCurrentMonth: () => {},
  calendarSettings: defaultProps,
}

interface CalendarProviderProps {
  children: React.ReactNode
}
export const CalendarContext = React.createContext<CalendarContextType>(initialContextValue)

export function CalendarProvider({ children }: CalendarProviderProps) {
  return <CalendarContext.Provider value={initialContextValue}>{children}</CalendarContext.Provider>
}
