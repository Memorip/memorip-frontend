'use client'

import { useNavigationStore } from '@/stores/navigation'

const Header = () => {
  const setIsMenuOpen = useNavigationStore((state) => state.setIsMenuOpen)

  const openNavigation = () => {
    setIsMenuOpen(true)
  }

  return (
    <header className='sticky flex justify-end px-3 py-4 shadow-md shadow-zinc-100'>
      <button onClick={openNavigation}>
        <i className='ri-menu-line text-xl' />
      </button>
    </header>
  )
}

export default Header
