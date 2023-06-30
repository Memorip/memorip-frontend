'use client'

import { useState } from 'react'

import moment from 'moment'

import { type Timeline } from '@/types/timeline'

import TimeLineMenu from './TimeLineMenu'

interface TimeLineProps {
  timeline: Timeline
}

export default function TimeLine({ timeline }: TimeLineProps) {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const { memo, data, createdAt } = timeline

  return (
    <div className='flex items-center justify-between rounded-lg bg-zinc-100 p-4' onClick={() => setIsOpenMenu(true)}>
      <div className='flex flex-col justify-between gap-4'>
        <span className='text-base font-bold'>{data}</span>
        <span className='text-xs font-semibold'>{memo}</span>
      </div>
      <span className='text-xs font-semibold text-stone-400'>{moment(createdAt).format('LT')}</span>
      <TimeLineMenu isOpen={isOpenMenu} setIsOpen={setIsOpenMenu} />
    </div>
  )
}
