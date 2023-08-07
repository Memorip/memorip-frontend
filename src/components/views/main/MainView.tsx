import Image from 'next/image'
import Link from 'next/link'

import dayjs from 'dayjs'

import Header from '@/components/shared/Header'
import SNB from '@/components/shared/SNB'

import ROUTE from '@/constants/route'
import useGetUserIdFromCache from '@/features/auth/useGetUserIdFromCache'
import { useMyPlanQuery } from '@/features/plan/useMyPlanQuery'

import { usePlanSortedByLikesQuery } from './hooks/usePlanSortedByLikesQuery'

const MainView = () => {
  const planSortedByLikesQuery = usePlanSortedByLikesQuery()

  const userId = useGetUserIdFromCache()
  const myPlanQuery = useMyPlanQuery(userId)

  return (
    <>
      <Header>
        <div>
          <Header.Logo />
        </div>
        <div className='flex items-center gap-4'>
          <Header.AddPlanButton />
          <Header.HamburgerButton />
        </div>
      </Header>
      <SNB />
      <div className='p-4'>
        <h1 className='mb-2 text-2xl font-bold'>어디로 떠나볼까요?</h1>
        <div className='flex items-center gap-2 rounded-3xl bg-zinc-300 p-2'>
          <div className='flex h-8 w-8 items-center justify-center rounded-full bg-white p-2'>
            <i className='ri-search-eye-line text-lg' />
          </div>
          <input className='flex-1 bg-zinc-300 outline-none' type='text' placeholder='여행지 입력하기' />
        </div>
        <h1 className='mb-1 mt-8 text-2xl font-bold'>국내 인기 여행지</h1>
        <span className='text-zinc-500'>직접 다녀온 추천 일정과 여행 꿀팁 확인하기</span>
        <div className='no-scrollbar mt-2 flex gap-4 overflow-x-scroll pb-8'>
          {planSortedByLikesQuery.isSuccess &&
            planSortedByLikesQuery.data.map(({ id, userId, city, startDate, endDate }) => (
              <Link className='rounded-lg shadow-lg shadow-zinc-300' href={ROUTE.PLAN(id)} key={id}>
                <div className='relative min-h-[180px] min-w-[240px]'>
                  <Image className='rounded-t-lg' src='/images/testimage2.png' fill alt='제주도' />
                </div>
                <div className='flex flex-col gap-1 p-4'>
                  <span className='text-sm text-zinc-400'>{userId}님의 일정</span>
                  <span className='font-semibold'>
                    {city} 뚜벅이 {dayjs(endDate).diff(dayjs(startDate), 'day')}박{' '}
                    {dayjs(endDate).diff(dayjs(startDate), 'day') + 1}일 🏃‍♂️
                  </span>
                </div>
              </Link>
            ))}
        </div>
        <div className='flex flex-col gap-2'>
          <h1 className='text-2xl font-bold'>최근 여행지</h1>
          {myPlanQuery.isSuccess &&
            myPlanQuery.data.slice(0, 3).map(({ id, city, startDate, endDate }) => (
              <Link
                className='flex items-center gap-2 rounded-lg p-4 shadow-md shadow-zinc-300'
                href={ROUTE.PLAN(id)}
                key={id}
              >
                <div className='relative h-16 w-16'>
                  <Image className='rounded-xl' src='/images/testimage2.png' fill alt='제주도' />
                </div>
                <div className='flex-1'>
                  <div className='flex items-center gap-1'>
                    <i className='ri-map-pin-2-line text-zinc-400' />
                    <span className='font-semibold'>{city}</span>
                  </div>
                  <p className='text-sm font-medium text-zinc-400'>
                    {dayjs(startDate).format('YYYY.MM.DD')} ~ {dayjs(endDate).format('YYYY.MM.DD')}
                  </p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </>
  )
}

export default MainView
