import React, { useContext } from 'react'

import Calendar from '@/pages/schedule/plan/_components/Calendar'
import { CalendarContext } from '@/pages/schedule/plan/_context/CalendarContext'

const Plan = () => {
  const { calendarSettings } = useContext(CalendarContext)

  const { numMonths } = calendarSettings

  return (
    <div className='border-2'>
      <div className='mb-4 mt-3 space-y-2 p-2'>
        <div className='text-xl font-semibold'>여행일정 등록</div>
        <div className='text-base text-gray-500'>일정에 따른 날씨예보, 여행 정보를 알려드립니다.</div>
      </div>

      <section className='h-96 overflow-scroll bg-gray-50'>
        {[...Array(numMonths)].map((_, index) => (
          <Calendar key={`month-view-${index}`} index={index} />
        ))}
      </section>
    </div>
  )
}

export default Plan
