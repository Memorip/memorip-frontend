import { use } from 'react'

import dayjs from 'dayjs'

import TimeLineBlock from '@/app/plan/[slug]/components/client/TimeLineBlock'
import TripInfoCard from '@/app/plan/[slug]/components/server/TripInfoCard'

import { getPlan } from '@/lib/apis/plan'
import { getTimelines } from '@/lib/apis/timeline'
import { getDatesArray } from '@/utils/date'

interface PlanDetailProps {
  params: {
    slug: string
  }
}

export default function PlanDetail({ params }: PlanDetailProps) {
  const planId = params.slug
  const { data: timelinesObject } = use(getTimelines(Number(planId)))
  const { data: plan } = use(getPlan(Number(planId)))

  const datesArray = getDatesArray(plan.startDate, plan.endDate)

  return (
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
