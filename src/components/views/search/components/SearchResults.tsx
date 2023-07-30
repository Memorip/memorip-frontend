import { useContext } from 'react'

import Spinner from '@/components/shared/Spinner'
import LocationCard from '@/components/views/search/components/LocationCard'
import { SearchContext } from '@/components/views/search/contexts/SearchContext'
import { useSearchQuery } from '@/components/views/search/hooks/useSearchQuery'
import { type Location } from '@/components/views/search/types/location'

interface SearchResultsProps {
  selectedLocations: Location[]
  setSelectedLocations: React.Dispatch<React.SetStateAction<Location[]>>
}

const SearchResults = ({ selectedLocations, setSelectedLocations }: SearchResultsProps) => {
  const { debouncedValue } = useContext(SearchContext)
  const searchQuery = useSearchQuery(debouncedValue)

  if (!debouncedValue) return

  return (
    <div className='p-4'>
      <span className='text-sm font-semibold'>검색 결과</span>
      <div className='mt-4 flex flex-col gap-2'>
        {searchQuery.isFetching && <Spinner />}
        {searchQuery.isSuccess &&
          (searchQuery.data.length > 0 ? (
            searchQuery.data.map(({ title, category, imageLink }) => (
              <LocationCard
                location={title}
                category={category}
                image={imageLink}
                key={title}
                selectedLocations={selectedLocations}
                setSelectedLocations={setSelectedLocations}
              />
            ))
          ) : (
            <span className='text-xs text-gray-400'>검색 결과가 없습니다.</span>
          ))}
      </div>
    </div>
  )
}

export default SearchResults
