import React from 'react'

import DayCell from '@/components/views/schedulePlan/components/DayCell'
import { generateMonthCalendar } from '@/components/views/schedulePlan/utils/dateUtils'

interface DateProps {
  year: number
  month: number
}

const Dates = ({ year, month }: DateProps) => {
  const totalDate = React.useMemo(() => {
    return generateMonthCalendar(year, month, 0)
  }, [year, month])

  // const [booking, setBooking] = React.useState({
  //   firstDate: undefined,
  //   lastDate: undefined,
  // })

  // const getDatesInRange = (date: any) => {
  //   if (!booking.firstDate || (booking.firstDate && booking.lastDate) || date < booking.firstDate) {
  //     setBooking((prev) => ({
  //       ...prev,
  //       firstDate: date,
  //       lastDate: undefined,
  //     }))
  //   } else if (date > booking.firstDate) {
  //     setBooking((prev) => ({
  //       ...prev,
  //       lastDate: date,
  //     }))
  //   }
  // }
  // console.log('booking', booking)

  return (
    <div className='mb-16 flex flex-row flex-wrap'>
      {totalDate.map((date) => (
        <DayCell
          key={date.toString()}
          month={date.getMonth()}
          year={date.getFullYear()}
          date={date.getDate()}
          day={date.getDay()}
          isOtherDay={date.getMonth() + 1 !== month}
          // getDatesInRange={getDatesInRange}
        />
      ))}
    </div>
  )
}

export default Dates
