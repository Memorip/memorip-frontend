import { type UseMutationOptions, useMutation, useQueryClient } from '@tanstack/react-query'

import { createTimelines } from '@/lib/apis/timeline'
import { queryKeys } from '@/lib/query-keys'

const useCreateTimelinesMutation = (planId: number, options: UseMutationOptions) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createTimelines,
    onSuccess: (data, variables, context) => {
      options?.onSuccess && options.onSuccess(data, variables, context)

      return queryClient.invalidateQueries(queryKeys.plan(planId))
    },
  })
}

export default useCreateTimelinesMutation
