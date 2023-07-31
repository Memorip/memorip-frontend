import { useQuery } from '@tanstack/react-query'

import { getTimelines } from '@/lib/apis/timeline'
import { QueryKeys } from '@/lib/queryKeys'

export const useTimelinesObjectQuery = (planId: number) => {
  return useQuery(QueryKeys.TIMELINES(planId), () => getTimelines({ planId }), {
    enabled: !!planId,
  })
}
