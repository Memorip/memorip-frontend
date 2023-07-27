import { useRouter } from 'next/router'

import React from 'react'

// import dayjs from 'dayjs'

import ROUTE from '@/constants/route'
import { usePlan } from '@/hooks/usePlan'

import Calendar from './components/Calendar'

const SchedulePlanView = () => {
  const [dates, setDates] = React.useState<string[]>([])

  const { addDate, plan } = usePlan()

  const router = useRouter()

  const handleSubmit = async () => {
    addDate(dates)
    // try {
    //   await createPlan({
    //     city: plan.city,
    //     endDate: dayjs(plan.endDate)?.toISOString(),
    //     startDate: dayjs(plan.startDate)?.toISOString(),
    //   })
    // } catch {}
    router.push(ROUTE.SCHEDULE_OPTION)
  }
  console.log('dates', plan)

  const convertedDatesArray = dates.map((date) => date.replace(/-/g, '.'))

  const getRegistrationStatusMessage = (convertedDatesArray: string[]) =>
    convertedDatesArray.length === 0
      ? '일정 등록하기'
      : convertedDatesArray.length === 1
      ? `${convertedDatesArray[0]} / 당일 일정으로 등록 완료`
      : `${convertedDatesArray[0]} - ${convertedDatesArray[convertedDatesArray.length - 1]} / 등록완료`

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

        <button onClick={handleSubmit} className=' mt-5 w-full rounded bg-blue-500 p-2 text-sm font-medium text-white'>
          {getRegistrationStatusMessage(convertedDatesArray)}
        </button>
      </div>
    </>
  )
}

export default SchedulePlanView
