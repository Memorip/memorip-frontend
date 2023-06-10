'use client'

import { useAtom } from 'jotai'

import { gnbAtom } from '@/stores/gnb'

const Header = () => {
  const [, setIsOpenGnb] = useAtom(gnbAtom)

  const openGnb = () => {
    setIsOpenGnb(true)
  }

  return (
    <header className='sticky flex justify-end px-3 py-4 shadow-md shadow-zinc-100'>
      <button onClick={openGnb}>
        <i className='ri-menu-line text-xl' />
      </button>
    </header>
  )
}

export default Header
