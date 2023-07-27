import { Tab } from '@headlessui/react'

const Review = () => {
  return (
    <Tab.Panel className='flex h-full flex-col items-center justify-center'>
      <div className='flex flex-col items-center justify-center'>
        <i className='ri-edit-line mb-5 text-4xl text-gray-200' />
        <span className='mb-1 text-lg font-semibold'>작성한 리뷰가 없습니다.</span>
        <p className='text-center text-sm font-semibold text-gray-400'>
          다녀온 여행지의 <br />
          리뷰를 남겨보세요.
        </p>
      </div>
    </Tab.Panel>
  )
}

export default Review
