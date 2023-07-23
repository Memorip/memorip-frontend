import Image from 'next/image'
import { useRouter } from 'next/router'

import { useState } from 'react'

import clsx from 'clsx'
import { toast } from 'react-toastify'

import Back from '@/components/views/search/components/Back'

import ROUTE from '@/constants/route'

import LocationCard from './components/LocationCard'
import Locations from './components/Locations'
import useCreateTimelinesMutation from './hooks/useCreateTimelinesMutation'
import { useSearch } from './hooks/useSearch'

export interface Location {
  title: string
  category: string
  imageLink: string
}

const SearchView = () => {
  const { push, query } = useRouter()
  const { searchInput, handleChangeSearchInput, searchQuery } = useSearch()
  const [selectedLocations, setSelectedLocations] = useState<Location[]>([])
  const planId = Number(query.planId)
  const date = query.date as string

  const handleClickSelected = (location: Location) => {
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
      locations: selectedLocations.map((location) => location.title),
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
          <div className='relative flex w-[48px] flex-col gap-1' key={location.title}>
            <button
              className='absolute right-[-12px] top-[-12px] z-50 h-6 w-6 rounded-full bg-white shadow-md shadow-gray-300'
              onClick={() => handleClickSelected(location)}
            >
              <i className='ri-close-line text-base text-gray-400' />
            </button>
            <div className='relative h-[48px] w-[48px]'>
              <Image className='rounded-md' fill src={location.imageLink} alt={location.title} />
            </div>
            <span className='truncate text-center text-xs font-semibold text-gray-500'>{location.title}</span>
          </div>
        ))}
      </div>
      <div className='p-4'>
        <span className='text-sm font-semibold'>검색 결과</span>
        <div className='mt-4 flex flex-col gap-2'>
          {searchQuery.isFetching ? (
            <div className='flex justify-center'>
              <i className='ri-loader-4-line animate-spin text-2xl text-gray-400' />
            </div>
          ) : searchQuery.isSuccess ? (
            searchQuery.data.length === 0 ? (
              <span className='text-xs text-gray-400'>검색 결과가 없습니다.</span>
            ) : (
              searchQuery.data.map(({ title, category, imageLink }) => (
                <LocationCard
                  location={title}
                  category={category}
                  image={imageLink}
                  key={title}
                  selectedLocations={selectedLocations}
                  setSelectedLocations={setSelectedLocations}
                />
              ))
            )
          ) : (
            <span className='text-xs text-gray-400'>검색어를 입력해주세요.</span>
          )}
        </div>
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
            image='/images/testimage2.png'
            category='Lorem ipsum dolor sit amet.'
            selectedLocations={selectedLocations}
            setSelectedLocations={setSelectedLocations}
          />
        </div>
      </div>
      <div className='fixed inset-x-0 bottom-0 z-10 flex w-full justify-center bg-white p-4'>
        <button className='w-full max-w-3xl rounded-md bg-blue-500 py-2 text-white' onClick={handleClickComplete}>
          선택 완료
        </button>
      </div>
    </div>
  )
}

export default SearchView
