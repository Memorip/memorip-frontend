import { useRouter } from 'next/router'

import { useState, useEffect } from 'react'

import { Tabs } from '@/components/views/me/constants'

export const useTab = () => {
  const { query, replace, isReady } = useRouter()

  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    if (!isReady) {
      return
    }

    setSelectedIndex(Tabs.findIndex(({ value }) => value === query.tab))
  }, [isReady])

  const handleClickTab = (index: number) => {
    const { value } = Tabs[index]
    replace({ query: { ...query, tab: value } })
    setSelectedIndex(index)
  }

  return {
    selectedIndex,
    setSelectedIndex,
    handleClickTab,
  }
}
