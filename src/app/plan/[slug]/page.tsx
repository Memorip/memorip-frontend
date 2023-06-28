import Link from 'next/link'

import { Suspense, use } from 'react'

import TimeLine from '@/app/plan/[slug]/components/client/TimeLine'
import DateButton from '@/app/plan/[slug]/components/server/DateButton'
import ProgressDot from '@/app/plan/[slug]/components/server/ProgressDot'
import TripInfoCard from '@/app/plan/[slug]/components/server/TripInfoCard'

import ROUTE from '@/constants/route'
import { getTimelines } from '@/services/timeline'

interface PlanDetailProps {
  params: {
    slug: string
  }
}

export default function PlanDetail({ params }: PlanDetailProps) {
  const planId = params.slug
  const { data: timelines } = use(getTimelines(Number(planId)))

  const timelineLength = timelines.length

  return (
    <Suspense
      fallback={
        <div className='flex h-screen items-center justify-center'>
          <div className='h-32 w-32 animate-spin rounded-full border-y-2 border-emerald-500' />
        </div>
      }
    >
      <div className='mt-4 p-4'>
        <TripInfoCard
          title='제주도 3박 4일 여행'
          startDate='2023.05.30'
          endDate='2023.06.02'
          tags={['힐링', '자연', '바다']}
        />
        <div className='no-scrollbar flex gap-10 overflow-x-auto pb-4'>
          {new Array(timelineLength).fill(0).map((_, index) => (
            <DateButton key={index} day={index + 1} />
          ))}
        </div>
        <hr className='mb-4' />
        <div className='flex gap-2'>
          <ProgressDot total={timelineLength} />
          <div className='flex flex-1 flex-col gap-4'>
            {timelines.map((timeline) => (
              <TimeLine timeline={timeline} key={timeline.id} />
            ))}
            <Link
              className='flex h-[88px] w-full items-center justify-center rounded-lg bg-zinc-100 p-4'
              href={ROUTE.SEARCH}
            >
              <i className='ri-add-line text-lg font-bold text-emerald-500' />
              <span className='text-sm font-bold text-emerald-500'>일정 추가하기</span>
            </Link>
          </div>
        </div>
      </div>
    </Suspense>
  )
}
