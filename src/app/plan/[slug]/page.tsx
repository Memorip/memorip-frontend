import { use } from 'react'

import TimeLineBlock from '@/app/plan/[slug]/components/client/TimeLineBlock'
import TripInfoCard from '@/app/plan/[slug]/components/server/TripInfoCard'

import { getTimelines } from '@/services/api/timeline'

interface PlanDetailProps {
  params: {
    slug: string
  }
}

export default function PlanDetail({ params }: PlanDetailProps) {
  const planId = params.slug
  const { data: timelines } = use(getTimelines(Number(planId)))

  return (
    <div className='mt-4 p-4'>
      <TripInfoCard
        title='제주도 3박 4일 여행'
        startDate='2023.05.30'
        endDate='2023.06.02'
        tags={['힐링', '자연', '바다']}
      />
      {/* <div className='no-scrollbar flex gap-10 overflow-x-auto pb-4'>
        {new Array(timelineLength).fill(0).map((_, index) => (
          <DateButton key={index} day={index + 1} />
        ))}
      </div> */}
      <hr className='mb-4' />
      <TimeLineBlock timelines={timelines} planId={planId} />
    </div>
  )
}
