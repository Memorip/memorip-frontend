import { useQuery } from '@tanstack/react-query'

import { getTimeline } from '@/lib/apis/timeline'
import { QueryKeys } from '@/lib/queryKeys'

export const useTimelineQuery = (id: number) => {
  return useQuery({
    queryKey: QueryKeys.TIMELINE(id),
    queryFn: () => getTimeline({ id }),
  })
}
