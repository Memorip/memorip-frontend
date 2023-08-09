import { useQueries } from '@tanstack/react-query'

import { getPlan } from '@/lib/apis/plan'
import { getTimelines } from '@/lib/apis/timeline'
import { QueryKeys } from '@/lib/queryKeys'
import { type Plan } from '@/types/plan'
import { type TimelinesObject } from '@/types/timeline'

export const usePlanQueries = (planId: number) => {
  return useQueries({
    queries: [
      {
        queryKey: QueryKeys.PLAN(planId),
        queryFn: () => getPlan({ planId }),
        enabled: !!planId,
        select: (data: Plan) => {
          return {
            plan: data,
          }
        },
      },
      {
        queryKey: QueryKeys.TIMELINES(planId),
        queryFn: () => getTimelines({ planId }),
        enabled: !!planId,
        select: (data: TimelinesObject) => {
          return {
            timelines: data,
          }
        },
      },
    ],
  })
}
