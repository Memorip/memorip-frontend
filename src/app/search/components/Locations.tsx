'use client'

import { useState } from 'react'

import LocationCard from './LocationCard'

export default function Locations() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <>
      <div className='mb-4 flex flex-col gap-4'>
        {new Array(3).fill(0).map((_, index) => (
          <LocationCard key={index} />
        ))}
        {isExpanded && (
          <>
            {new Array(5).fill(0).map((_, index) => (
              <LocationCard key={index} />
            ))}
          </>
        )}
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
