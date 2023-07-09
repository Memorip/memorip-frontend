import { useState } from 'react'

import LocationCard from '@/pages/search/components/LocationCard'

interface LocationsProps {
  selectedLocations: string[]
  setSelectedLocations: React.Dispatch<React.SetStateAction<string[]>>
}

const DUMMY_LOCATIONS = [
  '섭지코지',
  '만장굴',
  '정방폭포',
  '한라산',
  '성산일출봉',
  '우도',
  '협재해수욕장',
  '제주도 바다',
]

export default function Locations({ selectedLocations, setSelectedLocations }: LocationsProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const addedLocationLength = isExpanded ? 5 : 0

  return (
    <>
      <div className='mb-4 flex flex-col gap-4'>
        {DUMMY_LOCATIONS.slice(0, 3 + addedLocationLength).map((location, index) => (
          <LocationCard
            location={location}
            selectedLocations={selectedLocations}
            setSelectedLocations={setSelectedLocations}
            key={index}
          />
        ))}
      </div>
      {!isExpanded && (
        <button
          className='w-full rounded-full bg-zinc-100 py-2 text-base font-bold text-zinc-500'
          onClick={() => setIsExpanded(true)}
        >
          더보기
        </button>
      )}
    </>
  )
}
