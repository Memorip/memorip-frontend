import React from 'react'

// import dayjs from 'dayjs'

import { usePlan } from '@/hooks/usePlane'

import Calendar from './components/Calendar'

const SchedulePlanView = () => {
  const [dates, setDates] = React.useState<string[]>([])

  const { addDate, plan } = usePlan()

  const handleSubmit = async () => {
    addDate(dates)
    // try {
    //   await createPlan({
    //     city: plan.city,
    //     endDate: dayjs(plan.endDate)?.toISOString(),
    //     startDate: dayjs(plan.startDate)?.toISOString(),
    //   })
    // } catch {}
  }
  console.log('plan', plan)

  return (
    <>
      <div className='p-4'>
        <div className='mb-4 mt-3 space-y-2 p-2'>
          <div className='text-xl font-semibold'>여행일정 등록</div>
          <div className='text-base text-gray-500'>일정에 따른 날씨예보, 여행 정보를 알려드립니다.</div>
        </div>

        <section className='h-96 overflow-scroll bg-gray-50'>
          <Calendar setDates={setDates} />
        </section>
        <button onClick={handleSubmit} className='mt-5 w-full bg-blue-50 p-2 font-semibold text-blue-400'>
          일정 등록하기
        </button>
      </div>
    </>
  )
}

export default SchedulePlanView
