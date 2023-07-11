import React from 'react'

import DayCell from '@/app/schedule/plan/_components/day-cell'
import { generateMonthCalendar } from '@/app/schedule/plan/_utils/dateUtils'

interface DateProps {
  year: number
  month: number
}

export default function Dates({ year, month }: DateProps) {
  const totalDate = React.useMemo(() => {
    return generateMonthCalendar(year, month, 0)
  }, [year, month])

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
        />
      ))}
    </div>
  )
}
