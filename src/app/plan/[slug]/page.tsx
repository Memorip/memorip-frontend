const PlanDetail = () => {
  return (
    <div className='mt-4 p-4'>
      <h1 className='mb-1 text-2xl font-bold'>제주 OO 여행</h1>
      <span className='mb-2 inline-block text-neutral-400'>2023.5.30 ~ 6.2</span>
      <div className='mb-10 flex gap-1'>
        <span className='rounded-full bg-blue-500 px-3 py-1 text-white'>#친구</span>
        <span className='rounded-full bg-blue-500 px-3 py-1 text-white'>#SNS</span>
      </div>
      <div className='no-scrollbar flex gap-10 overflow-x-auto pb-4'>
        {new Array(5).fill(0).map((_, index) => (
          <button className='flex min-w-[64px] flex-col items-center gap-1' key={index}>
            <span className='text-lg font-semibold '>Day {index + 1}</span>
            <span className='text-sm text-zinc-400'>5/30</span>
          </button>
        ))}
      </div>
      <hr className='mb-4' />
      <div className='flex gap-2'>
        <div className='mt-8 flex flex-col'>
          {new Array(4).fill(0).map((_, index) => (
            <div className=' flex flex-col items-center justify-center' key={index}>
              <div className='h-4 w-4 rounded-full bg-green-400' />
              <hr className='my-1 h-20 w-0 border border-dashed border-stone-400' />
            </div>
          ))}
          <div className='h-4 w-4 rounded-full bg-green-400' />
        </div>

        <div className='flex flex-1 flex-col gap-4'>
          {new Array(4).fill(0).map((_, index) => (
            <div className='flex items-center justify-between rounded-lg bg-zinc-100 p-4' key={index}>
              <div className='flex flex-col justify-between gap-4'>
                <span className='text-base font-bold'>제주 OO 호텔</span>
                <span className='text-xs font-semibold'>휴식</span>
              </div>
              <span className='text-xs font-semibold text-stone-400'>10:00 AM</span>
            </div>
          ))}
          <div className='flex h-[88px] w-full items-center justify-center rounded-lg bg-zinc-100 p-4'>
            <div className='flex items-center gap-1'>
              <i className='ri-add-line text-lg font-bold text-emerald-500' />
              <span className='text-sm font-bold text-emerald-500'>일정 추가하기</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlanDetail
