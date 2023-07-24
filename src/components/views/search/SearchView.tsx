import { useRouter } from 'next/router'

import { useState } from 'react'

import clsx from 'clsx'
import { toast } from 'react-toastify'

import Back from '@/components/views/search/components/Back'
import RecommendedLocations from '@/components/views/search/components/RecommendedLocations'
import SearchInput from '@/components/views/search/components/SearchInput'
import SearchResults from '@/components/views/search/components/SearchResults'
import SelectedLocations from '@/components/views/search/components/SelectedLocations'
import useCreateTimelinesMutation from '@/components/views/search/hooks/useCreateTimelinesMutation'
import { type Location } from '@/components/views/search/types/location'

import ROUTE from '@/constants/route'

import { SearchContextProvider } from './contexts/searchContext'

const SearchView = () => {
  const { push, query } = useRouter()
  const planId = Number(query.planId as string)
  const date = query.date as string

  const createTimelinesMutation = useCreateTimelinesMutation(planId)
  const [selectedLocations, setSelectedLocations] = useState<Location[]>([])

  const handleClickComplete = () => {
    createTimelinesMutation.mutate(
      {
        locations: selectedLocations.map((location) => location.title),
        planId,
        date,
      },
      {
        onSuccess: () => {
          toast.success('선택하신 장소가 추가되었어요.')
          push(ROUTE.PLAN(planId))
        },
      }
    )
  }

  const buttonDisabled = selectedLocations.length === 0 || createTimelinesMutation.isLoading

  return (
    <SearchContextProvider>
      <header className='flex items-center gap-4 border-b border-gray-300 p-4'>
        <Back />
        <SearchInput />
      </header>
      <SelectedLocations selectedLocations={selectedLocations} setSelectedLocations={setSelectedLocations} />
      <SearchResults selectedLocations={selectedLocations} setSelectedLocations={setSelectedLocations} />
      <RecommendedLocations
        selectedLocations={selectedLocations}
        setSelectedLocations={setSelectedLocations}
        planId={planId}
      />
      <div className='fixed inset-x-0 bottom-0 z-10 flex w-full justify-center bg-white p-4'>
        <button
          className={clsx(
            'w-full max-w-3xl rounded-md bg-blue-500 py-2 text-white',
            buttonDisabled ? 'cursor-not-allowed opacity-50' : 'hover:bg-blue-600'
          )}
          disabled={buttonDisabled}
          onClick={handleClickComplete}
        >
          선택 완료
        </button>
      </div>
    </SearchContextProvider>
  )
}

export default SearchView
