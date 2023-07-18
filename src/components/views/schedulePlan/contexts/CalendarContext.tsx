import React from 'react'

import dayjs from 'dayjs'

interface CalendarProps {
  numMonths?: 1 | 2 | 3 | 4 | 10 | 20
}

interface BookingDatesType {
  firstDate: dayjs.Dayjs | undefined
  lastDate: dayjs.Dayjs | undefined
}

const defaultProps: CalendarProps = {
  numMonths: 20,
}

interface CalendarContextType {
  today: dayjs.Dayjs
  currentMonth: dayjs.Dayjs
  setCurrentMonth: (num: number) => void
  calendarSettings: CalendarProps
  bookingDates: BookingDatesType
  setBookingDates: React.Dispatch<React.SetStateAction<BookingDatesType>>
}

const initialContextValue: CalendarContextType = {
  today: dayjs(),
  currentMonth: dayjs(),
  setCurrentMonth: () => {},
  calendarSettings: defaultProps,
  bookingDates: {
    firstDate: undefined,
    lastDate: undefined,
  },
  setBookingDates: () => {},
}

interface CalendarProviderProps {
  children: React.ReactNode
}
export const CalendarContext = React.createContext<CalendarContextType>(initialContextValue)

export const CalendarProvider = ({ children }: CalendarProviderProps) => {
  return <CalendarContext.Provider value={initialContextValue}>{children}</CalendarContext.Provider>
}
