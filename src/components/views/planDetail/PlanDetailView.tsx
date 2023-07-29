import { useRouter } from 'next/router'

import dayjs from 'dayjs'

import Header from '@/components/shared/Header'
import SNB from '@/components/shared/SNB'
import TimeLineBlock from '@/components/views/planDetail/components/TimelineBlock'
import TripInfoCard from '@/components/views/planDetail/components/TripInfoCard'
import { useTimelinesObjectQuery } from '@/components/views/planDetail/hooks/useTimelinesObjectQuery'

import { usePlanQuery } from '@/features/plan/usePlanQuery'
import { getDatesArray } from '@/utils/date'

const PlanDetailView = () => {
  const { query } = useRouter()
  const planId = Number(query.slug)

  const timelinesObjectQuery = useTimelinesObjectQuery(planId)
  const planQuery = usePlanQuery(planId)

  if (!timelinesObjectQuery.isSuccess || !planQuery.isSuccess) {
    return null
  }

  const timelinesObject = timelinesObjectQuery.data
  const plan = planQuery.data

  const datesArray = getDatesArray(plan.startDate, plan.endDate)

  return (
    <>
      <Header>
        <Header.MapButton />
        <Header.HamburgerButton />
      </Header>
      <SNB />
      <div className='mt-4 p-4'>
        <TripInfoCard
          title='제주도 3박 4일 여행'
          startDate={dayjs(plan.startDate).format('YYYY.MM.DD')}
          endDate={dayjs(plan.endDate).format('YYYY.MM.DD')}
          tags={[plan.tripType]}
        />
        <hr className='mb-4' />
        <div className='flex flex-col space-y-4'>
          {datesArray.map((date, index) => (
            <TimeLineBlock
              date={dayjs(date).format('YYYY-MM-DD')}
              timelines={timelinesObject[dayjs(date).format('YYYY-MM-DD')] ?? []}
              planId={planId}
              day={index + 1}
              key={date}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default PlanDetailView
