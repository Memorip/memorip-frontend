import { useContext } from 'react'

import { SearchContext } from '@/components/views/search/contexts/searchContext'

const SearchInput = () => {
  const { searchInput, handleChangeSearchInput } = useContext(SearchContext)

  return (
    <input
      type='text'
      className='flex-1 outline-none placeholder:text-zinc-300'
      placeholder='관광지/맛집/숙소 검색'
      value={searchInput}
      onChange={handleChangeSearchInput}
    />
  )
}

export default SearchInput
