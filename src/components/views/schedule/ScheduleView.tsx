import Image from 'next/image'
import Link from 'next/link'

import React from 'react'

import clsx from 'clsx'

import { Input } from '@/components/forms'

import ROUTE from '@/constants/route'
import { usePlan } from '@/hooks/usePlan'

interface City {
  id: number
  name: string
  description: string
  image: string
  selected: boolean
}

const ScheduleView = () => {
  const MOCK = [
    { id: 1, name: '국내', description: '어디론가 떠나고 싶을 때', image: '/images/국내.jpg', selected: false },
    { id: 2, name: '가평·양평', description: '가평,양평', image: '/images/가평.jpg', selected: false },
    { id: 3, name: '강릉·속초', description: '강릉,속초,양양', image: '/images/강릉.jpg', selected: false },
    { id: 4, name: '경주', description: '경주', image: '/images/경주.jpg', selected: false },
    { id: 5, name: '부산', description: '부산', image: '/images/부산.jpg', selected: false },
    { id: 6, name: '여수', description: '여수,순천', image: '/images/여수.jpg', selected: false },
    { id: 7, name: '인천', description: '인천,강화도', image: '/images/인천.jpg', selected: false },
    { id: 8, name: '전주', description: '전주,군산', image: '/images/전주.jpg', selected: false },
    { id: 9, name: '제주', description: '제주', image: '/images/제주.jpg', selected: false },
    { id: 10, name: '춘천·홍천', description: '춘천,홍천', image: '/images/춘천.jpg', selected: false },
    { id: 11, name: '태안', description: '태안,당진,서산', image: '/images/태안.jpg', selected: false },
    { id: 12, name: '통영·거제·남해', description: '통영,거제,남해', image: '/images/통영.jpg', selected: false },
    { id: 13, name: '포항·안동', description: '포항,안동', image: '/images/포항.jpg', selected: false },
  ]

  const [selectedCity, setSelectedCity] = React.useState<City[]>([])

  const handleSelect = (id: number) => {
    const isSelected = selectedCity.some((city) => city.id === id)

    if (isSelected) {
      setSelectedCity((prev) => prev.filter((city) => city.id !== id))
    } else {
      const selected = MOCK.find((city) => city.id === id)
      if (selected) {
        selected.selected = true
        setSelectedCity((prev) => [...prev, selected])
      }
    }
  }

  const { addPlan } = usePlan()

  const handleSetPlan = () => {
    const cityName = selectedCity.map((city) => city.name)
    addPlan(cityName)
  }

  return (
    <div className={clsx('relative h-full overflow-y-auto p-4', selectedCity.length > 0 && 'h-[calc(100vh-154px)]')}>
      <div className='relative w-full'>
        <div className='absolute inset-y-0 right-5 flex items-center'>
          <i className='ri-search-line' />
        </div>
        <Input className='mt-3 rounded-md bg-slate-100' placeholder='여행,어디로 떠나시나요?' />
      </div>
      <div className='mt-6 space-y-4 p-3'>
        {MOCK.map((city) => (
          <div className='flex items-center space-x-4' key={city.id}>
            <div className='flex'>
              <div className='relative h-10 w-10'>
                <Image className='rounded-full' src={city.image} fill alt={city.name} sizes='100vw' priority />
              </div>
              <div className='ml-2 flex flex-col'>
                <span className='font-semibold'>{city.name}</span>
                <p className='text-sm text-gray-500'>{city.description}</p>
              </div>
            </div>

            <div className='grow' />

            {selectedCity.some((selected) => selected.id === city.id) ? (
              <button
                className='flex h-[30px] w-[50px] items-center justify-center rounded-full bg-gray-200 text-sm text-gray-600'
                onClick={() => handleSelect(city.id)}
              >
                취소
              </button>
            ) : (
              <button
                className='flex h-[30px] w-[50px] items-center justify-center rounded-full border border-blue-400 text-sm  text-blue-400'
                onClick={() => handleSelect(city.id)}
              >
                선택
              </button>
            )}
          </div>
        ))}
      </div>
      {selectedCity.length > 0 && (
        <div className='fixed bottom-0 left-0 w-full border-t border-slate-100 bg-white'>
          <div className='flex w-full items-center space-x-3 overflow-x-auto px-4 py-3'>
            {selectedCity.map((city, idx) => (
              <>
                <div key={city.id} className='flex w-12 flex-col items-center bg-white'>
                  <div className='relative mb-1 h-10 w-10'>
                    <button
                      className='absolute right-[-4px] top-[-4px] z-10 flex h-[20px] w-[20px] items-center justify-center rounded-full border bg-white'
                      onClick={() => handleSelect(city.id)}
                    >
                      <i className='ri-close-line text-xs text-gray-500' />
                    </button>
                    <Image className='rounded-full' src={city.image} fill alt={city.name} sizes='100vw' priority />
                  </div>
                  <span className='flex-none truncate text-xs'>{city.name}</span>
                </div>
                {idx !== selectedCity.length - 1 && <i className='ri-arrow-right-line' />}
              </>
            ))}
          </div>

          <Link href={ROUTE.SCHEDULE_PLAN}>
            <button
              className='flex w-full flex-none items-center justify-center bg-blue-500 py-4 text-sm font-medium text-white'
              onClick={handleSetPlan}
            >
              {`${
                selectedCity.length > 1
                  ? `${selectedCity[0].name} 외 ${selectedCity.length - 1}개`
                  : selectedCity[0].name
              } 선택 완료`}
            </button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default ScheduleView
