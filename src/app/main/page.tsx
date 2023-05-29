import Image from 'next/image'

const Main = () => {
  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-2'>어디로 떠나볼까요?</h1>
      <div className='flex items-center gap-2 bg-zinc-300 p-2 rounded-3xl'>
        <div className='flex justify-center items-center w-8 h-8 p-2 bg-white rounded-full'>
          <i className='ri-search-eye-line text-lg' />
        </div>
        <input className='flex-1 bg-zinc-300 outline-none' type='text' placeholder='여행지 입력하기' />
      </div>
      <h1 className='text-2xl font-bold mt-8 mb-1'>국내 인기 여행지</h1>
      <span className='text-zinc-500 text-md'>직접 다녀온 추천 일정과 여행 꿀팁 확인하기</span>
      <div className='flex gap-4 mt-2 overflow-x-scroll no-scrollbar pb-8'>
        {new Array(5).fill(0).map((_, index) => (
          <div className='shadow-lg shadow-zinc-300 rounded-lg' key={index}>
            <div className='relative min-w-[240px] min-h-[180px]' key={index}>
              <Image className='rounded-t-lg' src='/images/testimage2.png' fill alt='제주도' />
            </div>
            <div className='flex flex-col gap-1 p-4'>
              <span className='text-sm text-zinc-400'>여은지님의 일정</span>
              <span className='text-md font-semibold'>제주도 동쪽 뚜벅이 3박 4일 🏃‍♂️</span>
            </div>
          </div>
        ))}
      </div>
      <div className='flex flex-col gap-2'>
        <h1 className='text-2xl font-bold'>최근 여행지</h1>
        {new Array(3).fill(0).map((_, index) => (
          <div className='flex items-center gap-2 p-4 shadow-md shadow-zinc-300 rounded-lg' key={index}>
            <div className='relative w-16 h-16'>
              <Image className='rounded-xl' src='/images/testimage2.png' fill alt='제주도' />
            </div>
            <div className='flex-1'>
              <div className='flex items-center gap-1'>
                <i className='ri-map-pin-2-line text-md text-zinc-400' />
                <span className='text-md font-semibold'>제주도 바다</span>
              </div>
              <p className='text-md font-medium text-zinc-400'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Main
