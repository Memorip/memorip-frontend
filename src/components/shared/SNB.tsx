import Image from 'next/image'

import { Dialog } from '@headlessui/react'
import { useAtom } from 'jotai'

import { snbAtom } from '@/stores/snb'

export const MENU = [
  {
    name: '홈',
    icon: 'ri-home-4-line',
  },
  {
    name: '프로필',
    icon: 'ri-user-3-line',
  },
  {
    name: '메세지',
    icon: 'ri-chat-3-line',
  },
  {
    name: '저장한 여행',
    icon: 'ri-bookmark-3-line',
  },
  {
    name: '내 여행',
    icon: 'ri-map-pin-2-line',
  },
  {
    name: '좋아요',
    icon: 'ri-heart-3-line',
  },
  {
    name: '설정',
    icon: 'ri-settings-3-line',
  },
]

const SNB = () => {
  const [isOpenSnb, setIsOpenSnb] = useAtom(snbAtom)

  const onClose = () => {
    setIsOpenSnb(false)
  }

  return (
    <Dialog className='relative z-50' open={isOpenSnb} onClose={onClose}>
      <div className='fixed inset-0 bg-black/30' aria-hidden='true' />
      <nav className={`fixed right-0 top-0 z-10 h-screen w-4/5 max-w-[340px] animate-slide-left bg-white p-4`}>
        <Dialog.Panel>
          <div className='flex justify-between'>
            <button onClick={onClose}>
              <i className='ri-close-line text-xl' />
            </button>
            <div className='flex items-center gap-2'>
              <button>
                <i className='ri-notification-4-line text-xl' />
              </button>
              <button>
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
              {MENU.map(({ icon, name }, index) => (
                <li key={name} className='flex items-center gap-4 border-b-[0.5px] border-gray-200 py-4'>
                  <i className={icon} />
                  <span className='font-semibold'>{name}</span>
                </li>
              ))}
            </ul>
          </div>
        </Dialog.Panel>
      </nav>
    </Dialog>
  )
}

export default SNB
