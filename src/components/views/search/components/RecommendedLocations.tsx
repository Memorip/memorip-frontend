import clsx from 'clsx'

import Spinner from '@/components/shared/Spinner'
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
  const recommendQuery = useRecommendQuery(planQuery.isSuccess ? `${planQuery.data.city.join('')} 관광` : '')

  return (
    <div
      className={clsx(
        selectedLocations.length > 0 ? 'h-[calc(100vh-64px-100px-72px)]' : 'h-[calc(100vh-64px-72px)]',
        'overflow-y-auto p-4'
      )}
    >
      <div className='mb-4 flex justify-between'>
        <span className='text-sm font-semibold'>추천 장소</span>
      </div>
      {recommendQuery.isLoading && <Spinner />}
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
    </div>
  )
}

export default RecommendedLocations
