import { useInput } from '@/hooks'
import { useDebounce } from '@/hooks/useDebounce'

import { useSearchQuery } from './useSearchQuery'

export const useSearch = () => {
  const { value: searchInput, onChange: handleChangeSearchInput } = useInput('')
  const debouncedValue = useDebounce(searchInput, 500)

  const searchQuery = useSearchQuery(debouncedValue)

  return {
    searchInput,
    handleChangeSearchInput,
    searchQuery,
  }
}
