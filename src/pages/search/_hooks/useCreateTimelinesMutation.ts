import { type UseMutationOptions, useMutation, useQueryClient } from '@tanstack/react-query'

import { createTimelines } from '@/lib/apis/timeline'
import { QueryKeys } from '@/lib/queryKeys'

const useCreateTimelinesMutation = (planId: number, options: UseMutationOptions) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createTimelines,
    onSuccess: (data, variables, context) => {
      options?.onSuccess && options.onSuccess(data, variables, context)

      return queryClient.invalidateQueries(QueryKeys.PLAN(planId))
    },
  })
}

export default useCreateTimelinesMutation
