import { useQuery } from '@tanstack/react-query'

import { getPlan } from '@/lib/apis/plan'
import { QueryKeys } from '@/lib/queryKeys'

export const usePlanQuery = (planId: number) => {
  return useQuery(QueryKeys.PLAN(planId), () => getPlan({ planId }), {
    enabled: !!planId,
  })
}
