import Image from 'next/image'
import { useRouter } from 'next/router'

import { useState } from 'react'

import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import useUserInfoQuery from '@/features/auth/useUserInfoQuery'

const TABS = ['내 여행', '리뷰', '여행기']

const MeView = () => {
  const userInfoQuery = useUserInfoQuery()
  const { back } = useRouter()
  const [selectedIndex, setSelectedIndex] = useState(0)

  if (!userInfoQuery.isSuccess) return null

  const { profile, nickname } = userInfoQuery.data

  return (
    <div className='flex h-screen flex-col'>
      <div className='flex items-center justify-between px-3 py-4'>
        <i className='ri-arrow-left-line cursor-pointer text-2xl' onClick={back} />
        <button className='text-sm font-semibold text-blue-500'>프로필 편집</button>
      </div>
      <main className='h-[calc(100vh-64px)] overflow-y-auto'>
        <section className='mb-8 mt-4 flex flex-col items-center justify-center gap-4'>
          <Image
            className='rounded-full border border-gray-100 drop-shadow-sm'
            src={profile ?? '/images/bear.jpeg'}
            width={80}
            height={80}
            alt='profile'
          />
          <span className='text-xl font-semibold'>{nickname}</span>
        </section>
        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <Tab.List className='flex w-full justify-between'>
            {TABS.map((tab, index) => (
              <Tab
                key={tab}
                className={clsx(
                  'w-1/3 border-b py-2 font-medium',
                  `${selectedIndex === index ? 'border-b-2 border-b-blue-500' : ''}`
                )}
                onClick={() => setSelectedIndex(index)}
              >
                {tab}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <div className='p-4'>
                <div className='flex cursor-pointer items-center gap-4 rounded-lg bg-gray-100 p-4'>
                  <i className='ri-flight-takeoff-fill text-2xl' />
                  <div className='flex flex-col gap-1'>
                    <span className='text-base font-bold'>여행을 추가해보세요.</span>
                    <span className='text-xs font-semibold text-gray-500'>
                      새로운 여행을 추가하고 여행을 기록해보세요.
                    </span>
                  </div>
                </div>
              </div>
              <div className='p-4'>
                <span className='mb-4 inline-block text-base font-bold'>다가오는 여행</span>
                <div className='flex flex-col gap-5'>
                  {new Array(3).fill(0).map((_, index) => (
                    <div className='flex items-center gap-4' key={index}>
                      <Image
                        className='rounded-full border border-gray-100 drop-shadow-sm'
                        src={profile ?? '/images/bear.jpeg'}
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
            <Tab.Panel>리뷰</Tab.Panel>
            <Tab.Panel>여행기</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </main>
    </div>
  )
}

export default MeView
