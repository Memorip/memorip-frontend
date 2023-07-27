import Image from 'next/image'
import Link from 'next/link'

import { Tab } from '@headlessui/react'

import ROUTE from '@/constants/route'

const Travel = () => {
  return (
    <Tab.Panel>
      <div className='p-4'>
        <div className='flex cursor-pointer items-center gap-4 rounded-lg bg-gray-100 p-4'>
          <i className='ri-flight-takeoff-fill text-2xl' />
          <Link className='flex flex-col gap-1' href={ROUTE.SCHEDULE_PLAN}>
            <span className='text-base font-bold'>여행을 추가해보세요.</span>
            <span className='text-xs font-semibold text-gray-500'>새로운 여행을 추가하고 여행을 기록해보세요.</span>
          </Link>
        </div>
      </div>
      <div className='p-4'>
        <span className='mb-4 inline-block text-base font-bold'>다가오는 여행</span>
        <div className='flex flex-col gap-5'>
          {new Array(3).fill(0).map((_, index) => (
            <div className='flex items-center gap-4' key={index}>
              <Image
                className='rounded-full border border-gray-100 drop-shadow-sm'
                src={'/images/bear.jpeg'}
                width={60}
                height={60}
                alt='profile'
              />
              <div className='flex flex-col gap-1'>
                <span className='text-sm font-bold'>서울 여행</span>
                <span className='text-xs font-semibold text-gray-500'>2023.8.2 ~ 8.3</span>
                <span className='text-xs font-semibold text-gray-400'>1개 도시</span>
              </div>
              <i className='ri-more-fill ml-auto text-xl' />
            </div>
          ))}
        </div>
      </div>
    </Tab.Panel>
  )
}

export default Travel
