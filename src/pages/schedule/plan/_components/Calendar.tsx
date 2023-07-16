import React, { useEffect } from 'react'

import type dayjs from 'dayjs'

import Dates from '@/pages/schedule/plan/_components/Dates'
import { CalendarContext } from '@/pages/schedule/plan/_context/CalendarContext'

const Calendar = ({ index }: { index: number }) => {
  const { currentMonth } = React.useContext(CalendarContext)

  const calculateNewDates = (currentMonth: dayjs.Dayjs, index: number) => {
    const newMonth = ((currentMonth.month() + index) % 12) + 1
    const newYear = currentMonth.year() + Math.floor((currentMonth.month() + index) / 12)
    return { newMonth, newYear }
  }

  const [dates, setDates] = React.useState(calculateNewDates(currentMonth, index))

  useEffect(() => {
    setDates(calculateNewDates(currentMonth, index))
  }, [currentMonth, index])

  return (
    <div className='flex flex-col p-4'>
      <Year year={dates.newYear} month={dates.newMonth} />
      <WeekDays />
      <Dates year={dates.newYear} month={dates.newMonth} />
    </div>
  )
}

interface WeekdayHeaderProps {
  year: number
  month: number
}
function Year({ year, month }: WeekdayHeaderProps) {
  const formattedDate = (year: number, month: number) => `${year}년 ${month}월`
  return <div className='mb-2 px-2 text-sm font-medium text-gray-700'>{formattedDate(year, month)}</div>
}

function WeekDays() {
  const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토']
  return (
    <div className='flex h-10 items-center justify-around text-xs text-gray-500'>
      {WEEKDAYS.map((el) => (
        <div key={el}>{el}</div>
      ))}
    </div>
  )
}

export default Calendar
