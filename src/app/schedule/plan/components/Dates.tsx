import React from 'react'

import { generateMonthCalendar } from '../utils/dateUtils'

import DayCell from './DayCell'

interface DateProps {
  year: number
  month: number
}

export default function Dates({ year, month }: DateProps) {
  const totalDate = React.useMemo(() => {
    return generateMonthCalendar(year, month, 0)
  }, [year, month])

  return (
    <div className='mb-16 flex flex-row flex-wrap border-2'>
      {totalDate.map((date) => (
        <DayCell
          key={date.toString()}
          month={date.getMonth()}
          year={date.getFullYear()}
          date={date.getDate()}
          day={date.getDay()}
        />
      ))}
    </div>
  )
}
