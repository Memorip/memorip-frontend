import DateButton from '@/app/plan/[slug]/components/DateButton'
import ProgressDot from '@/app/plan/[slug]/components/ProgressDot'
import TimeLine from '@/app/plan/[slug]/components/TimeLine'
import TripInfoCard from '@/app/plan/[slug]/components/TripInfoCard'

const TIMELINE_LENGTH = 4

const PlanDetail = () => {
  return (
    <div className='mt-4 p-4'>
      <TripInfoCard
        title='제주도 3박 4일 여행'
        startDate='2023.05.30'
        endDate='2023.06.02'
        tags={['힐링', '자연', '바다']}
      />
      <div className='no-scrollbar flex gap-10 overflow-x-auto pb-4'>
        {new Array(TIMELINE_LENGTH).fill(0).map((_, index) => (
          <DateButton key={index} day={index + 1} />
        ))}
      </div>
      <hr className='mb-4' />
      <div className='flex gap-2'>
        <ProgressDot total={TIMELINE_LENGTH} />
        <div className='flex flex-1 flex-col gap-4'>
          {new Array(TIMELINE_LENGTH).fill(0).map((_, index) => (
            <TimeLine key={index} />
          ))}
          <button className='flex h-[88px] w-full items-center justify-center rounded-lg bg-zinc-100 p-4'>
            <div className='flex items-center gap-1'>
              <i className='ri-add-line text-lg font-bold text-emerald-500' />
              <span className='text-sm font-bold text-emerald-500'>일정 추가하기</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default PlanDetail
