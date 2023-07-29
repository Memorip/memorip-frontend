import { useQuery } from '@tanstack/react-query'

import removeBTag from '@/components/views/search/utils/removeBTag'

import { searchByKeyword } from '@/lib/apis/search'
import { QueryKeys } from '@/lib/queryKeys'

export const useRecommendQuery = (keyword: string) => {
  return useQuery({
    queryKey: QueryKeys.SEARCH(keyword, 'comment'),
    queryFn: () => searchByKeyword({ keyword, sort: 'comment' }),
    enabled: !!keyword,
    select: (locations) => {
      return locations.map((location) => ({
        ...location,
        title: removeBTag(location.title),
      }))
    },
  })
}
