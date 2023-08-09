import { useState } from 'react'

import dayjs from 'dayjs'

import InviteModal from '@/components/views/planDetail/components/InviteModal'
import { usePlanContext } from '@/components/views/planDetail/contexts/PlanContext'

import { type TripType } from '@/types/plan'

interface TripInfoCardProps {
  title: string
}

const TripInfoCard = ({ title }: TripInfoCardProps) => {
  const {
    plan: { startDate, endDate, tripType, views, likes },
  } = usePlanContext()

  const [isOpenInviteModal, setIsOpenInviteModal] = useState(false)

  const formattedStartDate = dayjs(startDate).format('YYYY.MM.DD')
  const formattedEndDate = dayjs(endDate).format('YYYY.MM.DD')
  const parsedTripTypes: TripType = JSON.parse(tripType)

  return (
    <>
      <InviteModal isOpen={isOpenInviteModal} onClose={() => setIsOpenInviteModal(false)} />
      <h1 className='mb-1 text-2xl font-bold'>{title}</h1>
      <span className='mb-2 inline-block text-neutral-400'>
        {formattedStartDate} ~ {formattedEndDate}
      </span>
      <div className='mb-4 flex gap-4'>
        <div className='flex items-center gap-2'>
          <i className='ri-eye-line text-sm text-gray-500' />
          <span className='text-sm text-gray-500'>{views} views</span>
        </div>
        <div className='flex items-center gap-2'>
          <i className='ri-heart-line text-sm text-gray-500' />
          <span className='text-sm text-gray-500'>{likes} likes</span>
        </div>
      </div>
      <div className='mb-4 flex flex-wrap gap-1'>
        {Object.entries(parsedTripTypes).map(([, tripTypes]) =>
          tripTypes.map((tripType) => (
            <span className='rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-500' key={tripType}>
              {tripType}
            </span>
          ))
        )}
      </div>
      <div className='my-4 flex'>
        <button
          className='flex items-center gap-1 rounded-full bg-blue-500 px-4 py-1 text-sm font-semibold text-white'
          onClick={() => setIsOpenInviteModal(true)}
        >
          <i className='ri-user-3-line text-lg text-white' />
          <span>일행 초대하기</span>
        </button>
      </div>
    </>
  )
}

export default TripInfoCard
