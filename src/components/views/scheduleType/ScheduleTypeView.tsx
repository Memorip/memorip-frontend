import Link from 'next/link'

const ScheduleTypeView = () => {
  return (
    <section className='mt-4 border-2 border-blue-400 p-6'>
      <h1 className='text-xl font-semibold'>
        어떤 스타일의 <br />
        여행을 할 계획인가요 ?
      </h1>

      <section className='mt-8 space-y-6'>
        <div>
          <h2>누구와</h2>
          <div className='mt-3'>
            <button className='h-[30px] w-[50px] rounded-lg bg-slate-100'>혼자</button>
          </div>
        </div>
        <div>
          <h2>여행 스타일</h2>
          <div className='mt-3'>
            <button className='h-[30px] w-fit rounded-lg bg-slate-100 px-3'>체험/액티비티</button>
          </div>
        </div>
      </section>

      <Link href={''}>
        <button className='mt-5 flex w-full flex-none items-center justify-center rounded-md bg-blue-500 py-4 text-sm font-medium text-white'>
          완료
        </button>
        <button className='mt-5 flex w-full flex-none items-center justify-center rounded-md  text-sm font-medium underline'>
          다음에 하기
        </button>
      </Link>
    </section>
  )
}

export default ScheduleTypeView
