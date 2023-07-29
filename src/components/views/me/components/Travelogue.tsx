import { Tab } from '@headlessui/react'

const Travelogue = () => {
  return (
    <Tab.Panel className='flex h-full flex-col items-center justify-center'>
      <div className='flex flex-col items-center justify-center'>
        <i className='ri-file-copy-2-line mb-5 text-4xl text-gray-200' />
        <span className='mb-1 text-lg font-semibold'>작성한 여행기가 없어요.</span>
        <p className='text-center text-sm font-semibold text-gray-400'>
          소중한 여행의 추억을 <br />
          여행기로 남겨보세요.
        </p>
      </div>
    </Tab.Panel>
  )
}

export default Travelogue
