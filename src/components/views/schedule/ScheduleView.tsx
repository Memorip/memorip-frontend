import Link from 'next/link'

import React from 'react'

import { Input } from '@/components/forms'
import Avatar from '@/components/user/Avatar'

import { usePlan } from '@/hooks/usePlane'

interface City {
  id: number
  name: string
  selected: boolean
}

const ScheduleView = () => {
  const MOCK = [
    { id: 1, name: '도쿄', selected: false },
    { id: 2, name: '하코네', selected: false },
    { id: 3, name: '요코하마', selected: false },
    { id: 4, name: '가마쿠라', selected: false },
    { id: 5, name: '오사카', selected: false },
    { id: 6, name: '나고야', selected: false },
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
    <div className='relative h-full w-full p-4 '>
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
              <Avatar size={40} />
              <div className='ml-2 flex flex-col'>
                <span className='font-semibold'>{city.name}</span>
                <p className='text-sm text-gray-500'>도쿄, 하코네,요코하마,가마쿠라</p>
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
        <div className='absolute h-[30vh] w-full border-t border-slate-100 p-5'>
          <div className='flex w-fit items-center space-x-3'>
            {selectedCity.map((city, idx) => (
              <>
                <div key={city.id} className='flex flex-col items-center'>
                  <span
                    className='relative left-4 top-3 flex h-[20px] w-[20px] items-center justify-center rounded-full border bg-white'
                    onClick={() => handleSelect(city.id)}
                  >
                    <i className='ri-close-line text-xs text-gray-500' />
                  </span>
                  <Avatar size={40} />
                  <span className='flex-none text-xs'>{city.name}</span>
                </div>
                {idx !== selectedCity.length - 1 && <i className='ri-arrow-right-line' />}
              </>
            ))}
          </div>

          <Link href={'schedule/plan'}>
            <button
              className='mt-5 flex w-full flex-none items-center justify-center rounded-md bg-blue-500 py-4 text-sm font-medium text-white'
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
