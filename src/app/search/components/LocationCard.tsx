import Image from 'next/image'

export default function LocationCard() {
  return (
    <div className='flex h-[50px] items-center gap-3'>
      <div className='relative h-[50px] w-[50px]'>
        <Image className='rounded-lg' fill src='/images/testimage2.png' alt='제주도' />
      </div>
      <div className='flex flex-1 items-center justify-between'>
        <div className='flex flex-col justify-between gap-2'>
          <span className='text-sm font-semibold'>제주도 바다</span>
          <p className='text-xs text-zinc-400'>Lorem ipsum dolor sit amet.</p>
        </div>
        <button className='h-8 rounded-full bg-zinc-100 px-4 text-xs font-semibold text-black'>선택</button>
      </div>
    </div>
  )
}
