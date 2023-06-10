'use client'

import { useAtom } from 'jotai'

import { snbAtom } from '@/stores/snb'

const Header = () => {
  const [, setIsOpenSnb] = useAtom(snbAtom)

  const openSnb = () => {
    setIsOpenSnb(true)
  }

  return (
    <header className='sticky flex justify-end px-3 py-4 shadow-md shadow-zinc-100'>
      <button onClick={openSnb}>
        <i className='ri-menu-line text-xl' />
      </button>
    </header>
  )
}

export default Header
