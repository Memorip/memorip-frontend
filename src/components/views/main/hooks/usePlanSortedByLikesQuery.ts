import { useQuery } from '@tanstack/react-query'

import { getPlanSortedByLikes } from '@/lib/apis/plan'
import { QueryKeys } from '@/lib/queryKeys'

export const usePlanSortedByLikesQuery = () => {
  return useQuery({
    queryKey: QueryKeys.PLAN_SORTED_BY_LIKES,
    queryFn: getPlanSortedByLikes,
  })
}
