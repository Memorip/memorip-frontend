import dayjs from 'dayjs'

import { usePlanContext } from '@/components/views/planDetail/contexts/PlanContext'

import { getDatesArray } from '@/utils/date'

import TimeLineBlock from './TimelineBlock'
import TripInfoCard from './TripInfoCard'

const PlanDetail = () => {
  const { plan, timelinesObject } = usePlanContext()

  return (
    <div className='mt-4 p-4'>
      <TripInfoCard title='제주도 3박 4일 여행' />
      <hr className='mb-4' />
      <div className='flex flex-col space-y-4'>
        {getDatesArray(plan.startDate, plan.endDate).map((date, index) => (
          <TimeLineBlock
            date={dayjs(date).format('YYYY-MM-DD')}
            timelines={timelinesObject[dayjs(date).format('YYYY-MM-DD')] ?? []}
            day={index + 1}
            key={date}
          />
        ))}
      </div>
    </div>
  )
}

export default PlanDetail
