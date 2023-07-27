import Image from 'next/image'
import { useRouter } from 'next/router'

import { useState } from 'react'

import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import Review from '@/components/views/me/components/Review'
import Travel from '@/components/views/me/components/Travel'
import Travelogue from '@/components/views/me/components/Travelogue'

import useUserInfoQuery from '@/features/auth/useUserInfoQuery'

const Tabs = ['내 여행', '리뷰', '여행기']

const MeView = () => {
  const userInfoQuery = useUserInfoQuery()
  const { back } = useRouter()
  const [selectedIndex, setSelectedIndex] = useState(0)

  if (!userInfoQuery.isSuccess) return null

  const { profile, nickname } = userInfoQuery.data

  return (
    <div className='h-screen'>
      <div className='flex items-center justify-between px-3 py-4'>
        <i className='ri-arrow-left-line cursor-pointer text-2xl' onClick={back} />
        <button className='text-sm font-semibold text-blue-500'>프로필 편집</button>
      </div>
      <main className='flex h-[calc(100vh-64px)] flex-col overflow-y-auto'>
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
            {Tabs.map((tab, index) => (
              <Tab
                key={tab}
                className={clsx(
                  'w-1/3 border-b py-2 font-medium',
                  selectedIndex === index ? 'border-b-2 border-b-blue-500' : ''
                )}
                onClick={() => setSelectedIndex(index)}
              >
                {tab}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className='flex-1'>
            <Travel />
            <Review />
            <Travelogue />
          </Tab.Panels>
        </Tab.Group>
      </main>
    </div>
  )
}

export default MeView
