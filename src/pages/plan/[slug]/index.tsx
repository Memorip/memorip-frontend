import { useRouter } from 'next/router'

import { useQuery } from '@tanstack/react-query'
import dayjs from 'dayjs'

import { HeaderRoot, MapButton, HamburgerButton } from '@/components/shared/header'
import SNB from '@/components/shared/snb'

import { getPlan } from '@/lib/apis/plan'
import { getTimelines } from '@/lib/apis/timeline'
import { queryKeys } from '@/lib/query-keys'
import { getDatesArray } from '@/utils/date'

import TimeLineBlock from './_components/timeline-block'
import TripInfoCard from './_components/trip-info-card'

function PlanDetail() {
  const { query } = useRouter()
  const planId = Number(query.slug)

  const timelinesObjectQuery = useQuery(queryKeys.timelines(planId), () => getTimelines(planId), {
    enabled: !!query.slug,
  })
  const planQuery = useQuery(queryKeys.plan(planId), () => getPlan(planId), {
    enabled: !!query.slug,
  })

  if (!timelinesObjectQuery.isSuccess || !planQuery.isSuccess) {
    return null
  }

  const { data: timelinesObject } = timelinesObjectQuery.data
  const { data: plan } = planQuery.data

  const datesArray = getDatesArray(plan.startDate, plan.endDate)

  return (
    <>
      <HeaderRoot>
        <MapButton />
        <HamburgerButton />
      </HeaderRoot>
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
              timelines={timelinesObject[dayjs(date).format('YYYY-MM-DD')]}
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

export default PlanDetail
