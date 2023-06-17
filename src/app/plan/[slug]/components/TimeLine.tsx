'use client'

import { useState } from 'react'

import MemoDialog from '@/app/plan/[slug]/components/MemoDialog'

const TimeLine = () => {
  const [isOpenMemoDialog, setIsOpenMemoDialog] = useState(false)

  return (
    <div
      className='flex items-center justify-between rounded-lg bg-zinc-100 p-4'
      onClick={() => setIsOpenMemoDialog(true)}
    >
      <div className='flex flex-col justify-between gap-4'>
        <span className='text-base font-bold'>제주 OO 호텔</span>
        <span className='text-xs font-semibold'>휴식</span>
      </div>
      <span className='text-xs font-semibold text-stone-400'>10:00 AM</span>
      <MemoDialog isOpen={isOpenMemoDialog} setIsOpen={setIsOpenMemoDialog} />
    </div>
  )
}

export default TimeLine
