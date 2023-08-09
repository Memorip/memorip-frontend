import { useQuery } from '@tanstack/react-query'

import { getPlanSortedByViews } from '@/lib/apis/plan'
import { QueryKeys } from '@/lib/queryKeys'

export const usePlanSortedByViewsQuery = () => {
  return useQuery({
    queryKey: QueryKeys.PLAN_SORTED_BY_VIEWS,
    queryFn: getPlanSortedByViews,
  })
}
