import React from 'react'

import { CalendarContext } from '@/components/views/schedulePlan/contexts/CalendarContext'

const useHandleClick = () => {
  const { bookingDates, setBookingDates } = React.useContext(CalendarContext)

  const getDatesInRange = (date: any) => {
    if (!bookingDates.firstDate || (bookingDates.firstDate && bookingDates.lastDate) || date < bookingDates.firstDate) {
      setBookingDates((prev) => ({
        ...prev,
        firstDate: date,
        lastDate: undefined,
      }))
    } else if (date > bookingDates.firstDate) {
      setBookingDates((prev) => ({
        ...prev,
        lastDate: date,
      }))
    }
  }

  return { getDatesInRange }
}

export default useHandleClick
