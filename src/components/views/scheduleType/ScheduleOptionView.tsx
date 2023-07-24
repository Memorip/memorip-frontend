import Link from 'next/link'

import React from 'react'

import clsx from 'clsx'

import { usePlan } from '@/hooks/usePlane'

const Options = {
  Activity: '체험/액티비티',
  SnS: 'SNS 핫플레이스',
  Nature: '자연과 함께',
  Attractions: '유명 관광지는 필수',
  Healing: '여유롭게 힐링',
  Culture: '문화/예술/역사',
  Shopping: '쇼핑은 열정적으로',
  Food: '맛집 탐방',
}

const ScheduleOptionView = () => {
  const [selected, setSelected] = React.useState<string[]>([])
  const [people, setPeople] = React.useState<number>(1)

  const changeHandler = (checked: boolean, key: string) => {
    if (checked) {
      setSelected((prev) => [...prev, key])
    } else {
      setSelected((prev) => prev.filter((item) => item !== key))
    }
  }
  const handleParticipants = (method: string) => {
    if (method === 'plus') {
      setPeople((prev) => prev + 1)
    } else if (method === 'minus') {
      setPeople((prev) => prev - 1)
      if (people === 0) {
        setPeople(1)
      }
    }
  }

  const { addOption, plan } = usePlan()
  const handleSetOption = () => {
    addOption(selected, people)
  }
  console.log('option', plan)

  return (
    <section className='mt-4 border-2 border-blue-400 p-6'>
      <h1 className='text-xl font-semibold'>
        어떤 스타일의 <br />
        여행을 할 계획인가요 ?
      </h1>

      <section className='mt-8 space-y-6'>
        <div>
          <h2 className='font-semibold'>인원은 ?</h2>
          <div className='mt-3 flex space-x-3'>
            <div className='flex items-center space-x-5 rounded border border-gray-300'>
              <button className='h-[30px] w-[50px] rounded-lg bg-slate-100' onClick={() => handleParticipants('plus')}>
                +
              </button>
              <div>{people}</div>
              <button className='h-[30px] w-[50px] rounded-lg bg-slate-100' onClick={() => handleParticipants('minus')}>
                -
              </button>
            </div>
          </div>
        </div>
        <div>
          <h2 className='font-semibold'>여행 스타일</h2>
          <div className='mt-3 space-y-4'>
            {Object.entries(Options).map(([key, value]) => (
              <>
                <label className='inline-block'>
                  <input
                    type='checkbox'
                    className='sr-only'
                    checked={selected.includes(key)}
                    onChange={(e) => changeHandler(e.target.checked, key)}
                    key={key}
                  />
                  <div
                    className={clsx(
                      'mr-3 h-[30px] w-fit rounded-xl  px-3 py-1 active:bg-blue-300',
                      selected.includes(key) ? 'bg-blue-500 text-white' : 'bg-slate-100 text-gray-500'
                    )}
                  >
                    {value}
                  </div>
                </label>
              </>
            ))}
          </div>
        </div>
      </section>

      <Link href={''}>
        <button
          onClick={handleSetOption}
          className='mt-5 flex w-full flex-none items-center justify-center rounded-md bg-blue-500 py-4 text-sm font-medium text-white'
        >
          완료
        </button>
        <button className='mt-5 flex w-full flex-none items-center justify-center rounded-md  text-sm font-medium underline'>
          다음에 하기
        </button>
      </Link>
    </section>
  )
}

export default ScheduleOptionView
