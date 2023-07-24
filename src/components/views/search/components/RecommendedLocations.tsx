import clsx from 'clsx'

import { useRecommendQuery } from '@/components/views/search/hooks/useRecommendQuery'
import { type Location } from '@/components/views/search/types/location'

import { usePlanQuery } from '@/features/plan/usePlanQuery'

import LocationCard from './LocationCard'

interface LocationsProps {
  selectedLocations: Location[]
  setSelectedLocations: React.Dispatch<React.SetStateAction<Location[]>>
  planId: number
}

const RecommendedLocations = ({ selectedLocations, setSelectedLocations, planId }: LocationsProps) => {
  const planQuery = usePlanQuery(planId)
  const recommendQuery = useRecommendQuery(planQuery.isSuccess ? `${planQuery.data.city.join('')} 맛집` : '')
  // const [isExpanded, setIsExpanded] = useState(false)

  // const addedLocationLength = isExpanded ? 5 : 0

  return (
    <div
      className={clsx(
        selectedLocations.length > 0 ? 'h-[calc(100vh-64px-100px-72px)]' : 'h-[calc(100vh-64px-72px)]',
        'overflow-y-auto p-4'
      )}
    >
      <div className='mb-4 flex justify-between'>
        <span className='text-sm font-semibold'>추천 장소</span>
        {/* <button className='text-sm font-semibold text-blue-500'>전체 보기</button> */}
      </div>
      {recommendQuery.isLoading && (
        <div className='mb-4 flex flex-col gap-4'>
          <i className='ri-loader-4-line animate-spin text-center text-4xl text-zinc-500' />
        </div>
      )}
      {recommendQuery.isSuccess && (
        <div className='mb-4 flex flex-col gap-4'>
          {recommendQuery.data.map(({ title, imageLink, category }) => (
            <LocationCard
              location={title}
              image={imageLink}
              category={category}
              selectedLocations={selectedLocations}
              setSelectedLocations={setSelectedLocations}
              key={title}
            />
          ))}
        </div>
      )}
      {/* {!isExpanded && (
        <button
          className='w-full rounded-full bg-zinc-100 py-2 text-base font-bold text-zinc-500'
          onClick={() => setIsExpanded(true)}
        >
          더보기
        </button>
      )} */}
    </div>
  )
}

export default RecommendedLocations
