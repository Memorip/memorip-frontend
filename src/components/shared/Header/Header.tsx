'use client'

import { useState } from 'react'
import Navigation from '@/components/shared/Navigation'
import { useNavigationStore } from '@/stores/navigation'

const Header = () => {
  const isMenuOpen = useNavigationStore((state) => state.isMenuOpen)
  const setIsMenuOpen = useNavigationStore((state) => state.setIsMenuOpen)

  const openNavigation = () => {
    setIsMenuOpen(true)
  }

  const closeNavigation = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className='flex justify-end sticky px-3 py-4 shadow-md shadow-zinc-100'>
      <button onClick={openNavigation}>
        <i className='ri-menu-line text-xl' />
      </button>
      <Navigation />
    </header>
  )
}

export default Header
