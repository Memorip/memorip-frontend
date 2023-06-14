'use client'

import Image from 'next/image'

import { useEffect } from 'react'

import { useAtom } from 'jotai'

import Modal from '@/app/components/shared/Modal'

import { snbAtom } from '@/stores/snb'

const Navigation = () => {
  const [isOpenSnb, setIsOpenSnb] = useAtom(snbAtom)

  const onClose = () => {
    setIsOpenSnb(false)
  }

  useEffect(() => {
    if (isOpenSnb) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpenSnb])

  return (
    <>
      {isOpenSnb && <Modal.Background onClose={onClose} />}
      <nav
        className={`fixed top-0 w-4/5 max-w-[340px] ${
          isOpenSnb ? 'right-0' : 'right-[-350px]'
        } z-10 h-screen bg-white p-4
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
        <div className='mt-8 flex justify-between'>
          <div className='flex flex-col gap-8'>
            <span className='text-2xl font-bold'>여은지</span>
            <div className='flex gap-4'>
              <div className='flex flex-col gap-1'>
                <span className='text-sm font-semibold text-blue-500'>6</span>
                <span className='text-sm font-semibold'>내 여행</span>
              </div>
              <div className='flex flex-col gap-1'>
                <span className='text-sm font-semibold text-blue-500'>1</span>
                <span className='text-sm font-semibold'>리뷰</span>
              </div>
              <div className='flex flex-col gap-1'>
                <span className='text-sm font-semibold text-blue-500'>2</span>
                <span className='text-sm font-semibold'>여행기</span>
              </div>
            </div>
          </div>
          <div className='relative h-20 w-20'>
            <Image className='rounded-full' src='/images/testimage2.png' fill alt='제주도' />
          </div>
        </div>
        <div>
          <ul className='mt-8 flex flex-col'>
            <li className='flex items-center gap-4 border-y-[0.5px] border-gray-200 py-4'>
              <i className='ri-home-4-line' />
              <span className='font-semibold'>홈</span>
            </li>
            <li className='flex items-center gap-4 border-b-[0.5px] border-gray-200 py-4'>
              <i className='ri-user-3-line ' />
              <span className='font-semibold'>프로필</span>
            </li>
            <li className='flex items-center gap-4 border-b-[0.5px] border-gray-200 py-4'>
              <i className='ri-chat-3-line ' />
              <span className='font-semibold'>메시지</span>
            </li>
            <li className='flex items-center gap-4 border-b-[0.5px] border-gray-200 py-4'>
              <i className='ri-bookmark-3-line ' />
              <span className='font-semibold'>저장한 여행</span>
            </li>
            <li className='flex items-center gap-4 border-b-[0.5px] border-gray-200 py-4'>
              <i className='ri-map-pin-2-line' />
              <span className='font-semibold'>내 여행</span>
            </li>
            {/* <li className='flex gap-4 py-4'>
              <i className='ri-compass-3-line ' />
              <span className=' font-bold'>탐색</span>
            </li> */}
            <li className='flex items-center gap-4 border-b-[0.5px] border-gray-200 py-4'>
              <i className='ri-heart-3-line' />
              <span className='font-semibold'>좋아요</span>
            </li>
            <li className='flex items-center gap-4 border-b-[0.5px] border-gray-200 py-4'>
              <i className='ri-settings-3-line' />
              <span className='font-semibold'>설정</span>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navigation
