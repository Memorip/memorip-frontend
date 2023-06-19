'use client'

import { useAtom } from 'jotai'

import ScheduleIcon from '@/assets/scheduleIcon.svg'
import { snbAtom } from '@/stores/snb'

export default function Header() {
  const [, setIsOpenSnb] = useAtom(snbAtom)

  const openSnb = () => {
    setIsOpenSnb(true)
  }

  return (
    <header className='sticky flex items-center justify-end space-x-4 px-3 py-4 shadow-md shadow-zinc-100'>
      <a href='/tripSchedule'>
        <ScheduleIcon />
      </a>
      <button onClick={openSnb}>
        <i className='ri-menu-line text-xl' />
      </button>
    </header>
  )
}
