'use client'

import { useNavigationStore } from '@/stores/navigation'
import Modal from '../Modal/Modal'
import { useEffect } from 'react'

const Navigation = () => {
  const isMenuOpen = useNavigationStore((state) => state.isMenuOpen)
  const setIsMenuOpen = useNavigationStore((state) => state.setIsMenuOpen)

  const onClose = () => {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <>
      {isMenuOpen && <Modal.Background />}
      <nav
        className={`w-4/5 fixed top-0 ${isMenuOpen ? 'right-0' : 'right-[-500px]'} z-10 p-4 bg-white h-screen
        transition-all duration-500 ease-in-out
      `}
      >
        <button onClick={onClose}>
          <i className='ri-close-line text-xl' />
        </button>
      </nav>
    </>
  )
}

export default Navigation
