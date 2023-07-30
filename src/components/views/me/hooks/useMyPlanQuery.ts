import { type UseQueryOptions, useQuery } from '@tanstack/react-query'

import { getMyPlans } from '@/lib/apis/plan'
import { QueryKeys } from '@/lib/queryKeys'
import { type Plan } from '@/types/plan'

export const useMyPlanQuery = (userId: number, options?: UseQueryOptions<Plan[], unknown, Plan[]>) => {
  return useQuery({
    queryKey: QueryKeys.MY_PLAN,
    queryFn: () => getMyPlans({ userId }),
    ...options,
  })
}
