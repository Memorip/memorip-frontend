'use client'

import { useNavigationStore } from '@/stores/navigation'
import Modal from '../Modal/Modal'
import { useEffect } from 'react'
import Image from 'next/image'

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
      {isMenuOpen && <Modal.Background onClose={onClose} />}
      <nav
        className={`w-4/5 max-w-[340px] fixed top-0 ${
          isMenuOpen ? 'right-0' : 'right-[-350px]'
        } z-10 p-4 bg-white h-screen
        transition-all duration-500 ease-in-out
      `}
      >
        <div className='flex justify-between'>
          <button onClick={onClose}>
            <i className='ri-close-line text-xl' />
          </button>
          <div className='flex items-center gap-2'>
            <button>
              <i className='ri-notification-4-line text-xl' />
            </button>
            <button>
              {/* <i className='ri-user-settings-line text-xl' /> */}
              <i className='ri-settings-3-line text-xl' />
            </button>
          </div>
        </div>
        <div className='flex justify-between mt-8'>
          <div className='flex flex-col gap-8'>
            <span className='text-2xl font-bold'>여은지</span>
            <div className='flex gap-4'>
              <div className='flex flex-col gap-1'>
                <span className='text-sm text-blue-500 font-semibold'>6</span>
                <span className='text-sm font-semibold'>내 여행</span>
              </div>
              <div className='flex flex-col gap-1'>
                <span className='text-sm text-blue-500 font-semibold'>1</span>
                <span className='text-sm font-semibold'>리뷰</span>
              </div>
              <div className='flex flex-col gap-1'>
                <span className='text-sm text-blue-500 font-semibold'>2</span>
                <span className='text-sm font-semibold'>여행기</span>
              </div>
            </div>
          </div>
          <div className='relative w-20 h-20'>
            <Image className='rounded-full' src='/images/testimage2.png' fill alt='제주도' />
          </div>
        </div>
        <div>
          <ul className='flex flex-col mt-8'>
            <li className='flex items-center gap-4 py-4 border-y-[0.5px] border-gray-200'>
              <i className='ri-home-4-line text-md' />
              <span className='text-md font-semibold'>홈</span>
            </li>
            <li className='flex items-center gap-4 py-4 border-b-[0.5px] border-gray-200'>
              <i className='ri-user-3-line text-md' />
              <span className='text-md font-semibold'>프로필</span>
            </li>
            <li className='flex items-center gap-4 py-4 border-b-[0.5px] border-gray-200'>
              <i className='ri-chat-3-line text-md' />
              <span className='text-md font-semibold'>메시지</span>
            </li>
            <li className='flex items-center gap-4 py-4 border-b-[0.5px] border-gray-200'>
              <i className='ri-bookmark-3-line text-md' />
              <span className='text-md font-semibold'>저장한 여행</span>
            </li>
            <li className='flex items-center gap-4 py-4 border-b-[0.5px] border-gray-200'>
              <i className='ri-map-pin-2-line text-md' />
              <span className='text-md font-semibold'>내 여행</span>
            </li>
            {/* <li className='flex gap-4 py-4'>
              <i className='ri-compass-3-line text-md' />
              <span className='text-md font-bold'>탐색</span>
            </li> */}
            <li className='flex items-center gap-4 py-4 border-b-[0.5px] border-gray-200'>
              <i className='ri-heart-3-line text-md' />
              <span className='text-md font-bold'>좋아요</span>
            </li>
            <li className='flex items-center gap-4 py-4 border-b-[0.5px] border-gray-200'>
              <i className='ri-settings-3-line text-md' />
              <span className='text-md font-bold'>설정</span>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navigation
