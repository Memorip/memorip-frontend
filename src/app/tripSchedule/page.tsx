'use client'

import { Input } from '../components/shared/Forms'

export default function TripSchedule() {
  return (
    <div>
      <div className='relative w-full border-2 border-red-200'>
        <div className='absolute inset-y-0 right-5 flex items-center'>
          <i className='ri-search-line' />
        </div>
        <Input className='rounded-md bg-slate-100' placeholder='여행,어디로 떠나시나요?' />
      </div>
      <div className='flex space-x-7 border-2 border-green-500'>
        <div>avatar</div>
        <div className='flex items-center space-x-7'>
          <div className='flex flex-col'>
            <span>도쿄</span>
            <p>도쿄, 하코네,요코하마,가마쿠라</p>
          </div>
          <span className='flex h-[30px] w-[50px] items-center justify-center rounded-lg bg-gray-200'>취소</span>
        </div>
      </div>
    </div>
  )
}
