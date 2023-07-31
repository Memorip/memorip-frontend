import React, { type ChangeEvent, createContext, type ReactNode } from 'react'

import { useInput } from '@/hooks'
import { useDebounce } from '@/hooks/useDebounce'

export const SearchContext = createContext({
  searchInput: '',
  handleChangeSearchInput: (event: ChangeEvent<HTMLInputElement>) => {},
  debouncedValue: '',
})

export const SearchContextProvider = ({ children }: { children: ReactNode }) => {
  const { value: searchInput, onChange: handleChangeSearchInput } = useInput('')
  const debouncedValue = useDebounce(searchInput, 500)

  return (
    <SearchContext.Provider
      value={{
        searchInput,
        handleChangeSearchInput,
        debouncedValue,
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}
