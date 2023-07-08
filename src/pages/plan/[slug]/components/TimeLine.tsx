import { useState } from 'react'

import dayjs from 'dayjs'

import { type Timeline } from '@/types/timeline'

import TimeLineMenu from './TimeLineMenu'

interface TimeLineProps {
  timeline: Timeline
  isEditing: boolean
}

export default function TimeLine({ timeline, isEditing }: TimeLineProps) {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const { memo, data, createdAt } = timeline

  const handleClickOpenMenu = () => {
    if (!isEditing) {
      setIsOpenMenu(true)
    }
  }

  return (
    <div className='flex items-center justify-between rounded-lg bg-zinc-100 p-4' onClick={handleClickOpenMenu}>
      <div className='flex flex-col justify-between gap-4'>
        <span className='text-base font-bold'>{data}</span>
        <span className='text-xs font-semibold'>{memo}</span>
      </div>
      <span className='text-xs font-semibold text-stone-400'>{dayjs(createdAt).format('HH:mm')}</span>
      <TimeLineMenu isOpen={isOpenMenu} setIsOpen={setIsOpenMenu} />
    </div>
  )
}
