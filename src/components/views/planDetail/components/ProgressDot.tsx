export default function ProgressDot({ total, isAuthor }: { total: number; isAuthor: boolean }) {
  if (isAuthor) {
    return (
      <div className='mt-8 flex flex-col'>
        {new Array(total).fill(0).map((_, index) => (
          <div className='flex flex-col items-center justify-center' key={index}>
            <div className='h-4 w-4 rounded-full bg-green-400' />
            <hr className='my-1 h-20 w-0 border border-dashed border-stone-400' />
          </div>
        ))}
        <div className='h-4 w-4 rounded-full bg-green-400' />
      </div>
    )
  }

  return (
    <div className='mt-8 flex flex-col'>
      {total > 0 && <div className='h-4 w-4 rounded-full bg-green-400' />}
      {total > 1 &&
        new Array(total - 1).fill(0).map((_, index) => (
          <div className='flex flex-col items-center justify-center' key={index}>
            <hr className='my-1 h-20 w-0 border border-dashed border-stone-400' />
            <div className='h-4 w-4 rounded-full bg-green-400' />
          </div>
        ))}
    </div>
  )
}
