import { useRouter } from 'next/router'

import dayjs from 'dayjs'
import { toast } from 'react-toastify'

import Header from '@/components/shared/Header'
import SNB from '@/components/shared/SNB'
import Spinner from '@/components/shared/Spinner'
import TimeLineBlock from '@/components/views/planDetail/components/TimelineBlock'
import TripInfoCard from '@/components/views/planDetail/components/TripInfoCard'
import { useTimelinesObjectQuery } from '@/components/views/planDetail/hooks/useTimelinesObjectQuery'

import useGetUserIdFromCache from '@/features/auth/useGetUserIdFromCache'
import { usePlanQuery } from '@/features/plan/usePlanQuery'
import { getDatesArray } from '@/utils/date'

import { useLikeMutation } from './hooks/useLikeMutation'

const PlanDetailView = () => {
  const { query } = useRouter()
  const planId = Number(query.slug)

  const timelinesObjectQuery = useTimelinesObjectQuery(planId)
  const planQuery = usePlanQuery(planId)

  const likeMutation = useLikeMutation()
  const userId = useGetUserIdFromCache()

  const handleClickLike = () => {
    likeMutation.mutate(
      { planId, userId },
      {
        onSuccess: () => {
          toast.success('좋아요를 눌렀습니다.')
        },
      }
    )
  }

  if (timelinesObjectQuery.isLoading || planQuery.isLoading) {
    return (
      <div className='flex h-screen w-full items-center justify-center'>
        <Spinner />
      </div>
    )
  }

  if (!timelinesObjectQuery.isSuccess || !planQuery.isSuccess) {
    return null
  }

  const timelinesObject = timelinesObjectQuery.data
  const plan = planQuery.data

  return (
    <>
      <Header>
        <div>
          <Header.Logo />
        </div>
        <div className='flex items-center gap-4'>
          <Header.LikeButton isLiked={true} onClick={handleClickLike} />
          <Header.MapButton />
          <Header.HamburgerButton />
        </div>
      </Header>
      <SNB />
      <div className='mt-4 p-4'>
        <TripInfoCard
          title='제주도 3박 4일 여행'
          startDate={dayjs(plan.startDate).format('YYYY.MM.DD')}
          endDate={dayjs(plan.endDate).format('YYYY.MM.DD')}
          tags={plan.tripType}
          views={plan.views}
          likes={plan.likes}
        />
        <hr className='mb-4' />
        <div className='flex flex-col space-y-4'>
          {timelinesObjectQuery.isLoading && <Spinner />}
          {timelinesObjectQuery.isSuccess &&
            getDatesArray(plan.startDate, plan.endDate).map((date, index) => (
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
