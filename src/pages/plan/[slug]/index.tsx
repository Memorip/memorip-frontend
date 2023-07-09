import { useRouter } from 'next/router'

import { useQuery } from '@tanstack/react-query'
import dayjs from 'dayjs'

import TripInfoCard from '@/pages/plan/[slug]/components/TripInfoCard'

import { getPlan } from '@/lib/apis/plan'
import { getTimelinesObject } from '@/lib/apis/timeline'
import { queryKeys } from '@/lib/queryKeys'
import { getDatesArray } from '@/utils/date'

import TimeLineBlock from './components/TimeLineBlock'

export default function PlanDetail() {
  const { query } = useRouter()
  const planId = Number(query.slug)
  const timelinesQuery = useQuery({
    queryKey: queryKeys.timelines(planId),
    queryFn: () => getTimelinesObject(planId),
  })
  const planQuery = useQuery({
    queryKey: queryKeys.plan(planId),
    queryFn: () => getPlan(planId),
  })

  if (!planQuery.isSuccess || !timelinesQuery.isSuccess) {
    return null
  }

  const timelinesObject = timelinesQuery.data.data
  const { startDate, endDate, tripType } = planQuery.data.data

  const datesArray = getDatesArray(startDate, endDate)

  return (
    <div className='mt-4 p-4'>
      <TripInfoCard
        title='제주도 3박 4일 여행'
        startDate={dayjs(startDate).format('YYYY.MM.DD')}
        endDate={dayjs(endDate).format('YYYY.MM.DD')}
        tags={[tripType]}
      />
      <hr className='mb-4' />
      <div className='flex flex-col space-y-4'>
        {datesArray.map((date, index) => (
          <TimeLineBlock
            date={dayjs(date).format('YYYY-MM-DD')}
            timelines={timelinesObject[dayjs(date).format('YYYY-MM-DD')]}
            planId={planId}
            day={index + 1}
            key={date}
          />
        ))}
      </div>
    </div>
  )
}
