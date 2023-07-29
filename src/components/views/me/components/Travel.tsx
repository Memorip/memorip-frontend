import Image from 'next/image'
import Link from 'next/link'

import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import dayjs from 'dayjs'

import { useMyPlanQuery } from '@/components/views/me/hooks/useMyPlanQuery'

import ROUTE from '@/constants/route'
import useUserInfoQuery from '@/features/auth/useUserInfoQuery'

const Travel = () => {
  const userInfoQuery = useUserInfoQuery()
  const myPlanQuery = useMyPlanQuery(userInfoQuery.data?.id as number, {
    enabled: !!userInfoQuery.isSuccess,
  })

  if (!myPlanQuery.isSuccess) return null

  const upComingPlans = myPlanQuery.data.filter(({ startDate }) => dayjs(startDate).isAfter(dayjs()))
  const pastPlans = myPlanQuery.data.filter(({ startDate }) => dayjs(startDate).isBefore(dayjs()))

  return (
    <Tab.Panel className={clsx('flex h-full flex-col items-center justify-center')}>
      {myPlanQuery.data.length > 0 ? (
        <div className='w-full'>
          <div className='p-4'>
            <div className='flex cursor-pointer items-center gap-4 rounded-lg bg-gray-100 p-4'>
              <i className='ri-flight-takeoff-fill text-2xl' />
              <Link className='flex flex-col gap-1' href={ROUTE.SCHEDULE_PLAN}>
                <span className='text-base font-bold'>여행을 추가해보세요.</span>
                <span className='text-xs font-semibold text-gray-500'>새로운 여행을 추가하고 여행을 기록해보세요.</span>
              </Link>
            </div>
          </div>
          {upComingPlans.length > 0 && (
            <div className='p-4'>
              <span className='mb-4 inline-block text-base font-bold'>다가오는 여행</span>
              <div className='flex flex-col gap-5'>
                {upComingPlans.map(({ id, city, startDate, endDate }) => (
                  <Link href={ROUTE.PLAN(id)} className='flex items-center gap-4' key={id}>
                    <Image
                      className='rounded-full border border-gray-100 drop-shadow-sm'
                      src={'/images/bear.jpeg'}
                      width={60}
                      height={60}
                      alt='profile'
                    />
                    <div className='flex flex-col gap-1'>
                      <span className='text-sm font-bold'>{city.join(',')}</span>
                      <span className='text-xs font-semibold text-gray-500'>
                        {dayjs(startDate).format('YYYY.MM.DD')} ~ {dayjs(endDate).format('YYYY.MM.DD')}
                      </span>
                      <span className='text-xs font-semibold text-gray-400'>{city.length}개 도시</span>
                    </div>
                    <i className='ri-more-fill ml-auto text-xl' />
                  </Link>
                ))}
              </div>
            </div>
          )}
          {pastPlans.length > 0 && (
            <div className='p-4'>
              <span className='mb-4 inline-block text-base font-bold'>지난 여행</span>
              <div className='flex flex-col gap-5'>
                {pastPlans.map(({ id, city, startDate, endDate }) => (
                  <Link href={ROUTE.PLAN(id)} className='flex items-center gap-4' key={id}>
                    <Image
                      className='rounded-full border border-gray-100 drop-shadow-sm'
                      src={'/images/bear.jpeg'}
                      width={60}
                      height={60}
                      alt='profile'
                    />
                    <div className='flex flex-col gap-1'>
                      <span className='text-sm font-bold'>{city.join(',')}</span>
                      <span className='text-xs font-semibold text-gray-500'>
                        {dayjs(startDate).format('YYYY.MM.DD')} ~ {dayjs(endDate).format('YYYY.MM.DD')}
                      </span>
                      <span className='text-xs font-semibold text-gray-400'>{city.length}개 도시</span>
                    </div>
                    <i className='ri-more-fill ml-auto text-xl' />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className='flex flex-col items-center justify-center'>
          <i className='ri-flight-takeoff-line mb-5 text-4xl text-gray-200' />
          <span className='mb-1 text-lg font-semibold'>생성한 여행 계획이 없어요.</span>
          <p className='text-center text-sm font-semibold text-gray-400'>
            새로운 장소를 발견하고 <br />
            즐거운 추억을 만들어보세요.
          </p>
        </div>
      )}
    </Tab.Panel>
  )
}

export default Travel
