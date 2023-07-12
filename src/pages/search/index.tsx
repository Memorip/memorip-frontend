import Image from 'next/image'
import { useRouter } from 'next/router'

import { useState } from 'react'

import clsx from 'clsx'
import { toast } from 'react-toastify'

import ROUTE from '@/constants/route'
import { useInput } from '@/hooks'
import Back from '@/pages/search/_components/back'

import LocationCard from './_components/location-card'
import Locations from './_components/locations'
import useCreateTimelinesMutation from './_hooks/use-create-timelines-mutation'

export default function Search() {
  const { push, query } = useRouter()
  const [selectedLocations, setSelectedLocations] = useState<string[]>([])
  const { value: searchInput, onChange: handleChangeSearchInput } = useInput('')
  const planId = Number(query.planId)
  const date = query.date as string

  const handleClickSelected = (location: string) => {
    if (selectedLocations.includes(location)) {
      setSelectedLocations((prev) => prev.filter((prevLocation) => prevLocation !== location))
    } else {
      setSelectedLocations((prev) => [...prev, location])
    }
  }

  const createTimelinesMutation = useCreateTimelinesMutation(planId, {
    onSuccess: () => {
      toast.success('선택하신 장소가 추가되었어요.')
      push(ROUTE.PLAN(planId))
    },
  })

  const handleClickComplete = () => {
    createTimelinesMutation.mutate({
      locations: selectedLocations,
      planId,
      date,
    })
  }

  return (
    <div>
      <header className='flex items-center gap-4 border-b border-gray-300 p-4'>
        <Back />
        <input
          type='text'
          className='flex-1 outline-none placeholder:text-zinc-300'
          placeholder='관광지/맛집/숙소 검색'
          value={searchInput}
          onChange={handleChangeSearchInput}
        />
      </header>
      <div className={clsx('flex gap-4 overflow-x-auto', selectedLocations.length > 0 ? 'h-full p-4' : 'h-0 p-0')}>
        {selectedLocations.map((location) => (
          <div className='relative flex w-[48px] flex-col gap-1' key={location}>
            <button
              className='absolute right-[-12px] top-[-12px] z-50 h-6 w-6 rounded-full bg-white shadow-md shadow-gray-300'
              onClick={() => handleClickSelected(location)}
            >
              <i className='ri-close-line text-base text-gray-400' />
            </button>
            <div className='relative h-[48px] w-[48px]'>
              <Image className='rounded-md' fill src='/images/testimage2.png' alt='제주도' />
            </div>
            <span className='truncate text-center text-xs font-semibold text-gray-500'>{location}</span>
          </div>
        ))}
      </div>
      <div
        className={clsx(
          selectedLocations.length > 0 ? 'h-[calc(100vh-64px-100px-72px)]' : 'h-[calc(100vh-64px-72px)]',
          'overflow-y-auto p-4'
        )}
      >
        <div className='mb-4 flex justify-between'>
          <span className='text-sm font-semibold'>추천 장소</span>
          <button className='text-sm font-semibold text-blue-500'>전체 보기</button>
        </div>
        <Locations selectedLocations={selectedLocations} setSelectedLocations={setSelectedLocations} />
        <div className='mt-12'>
          <span className='mb-4 inline-block text-sm font-semibold'>최근 검색 장소</span>
          <LocationCard
            location='제주도 어딘가'
            selectedLocations={selectedLocations}
            setSelectedLocations={setSelectedLocations}
          />
        </div>
      </div>
      <div className='fixed inset-x-0 bottom-0 z-10 w-full bg-white p-4'>
        <button className='w-full max-w-3xl rounded-md bg-blue-500 py-2 text-white' onClick={handleClickComplete}>
          선택 완료
        </button>
      </div>
    </div>
  )
}
