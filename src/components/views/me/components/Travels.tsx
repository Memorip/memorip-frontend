import Image from 'next/image'
import Link from 'next/link'

import dayjs from 'dayjs'

import ROUTE from '@/constants/route'
import { type Plan } from '@/types/plan'

interface TravelsProps {
  plans: Plan[]
}

const Travels = ({ plans }: TravelsProps) => {
  return (
    <div className='flex flex-col gap-5'>
      {plans.map(({ id, city, startDate, endDate }) => (
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
  )
}

export default Travels
