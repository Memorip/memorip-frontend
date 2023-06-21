import Back from '@/app/search/components/Back'
import LocationCard from '@/app/search/components/LocationCard'
import Locations from '@/app/search/components/Locations'

export default function Search() {
  return (
    <div>
      <header className='flex items-center gap-4 border-b border-gray-300 p-4'>
        <Back />
        <input
          type='text'
          className='flex-1 outline-none placeholder:text-zinc-300'
          placeholder='관광지/맛집/숙소 검색'
        />
      </header>
      <div className='p-4'>
        <div className='mb-4 flex justify-between'>
          <span className='text-sm font-semibold'>추천 장소</span>
          <button className='text-sm font-semibold text-blue-500'>전체 보기</button>
        </div>
        <Locations />
        <div className='mt-12'>
          <span className='mb-4 inline-block text-sm font-semibold'>최근 검색 장소</span>
          <LocationCard />
        </div>
      </div>
    </div>
  )
}
