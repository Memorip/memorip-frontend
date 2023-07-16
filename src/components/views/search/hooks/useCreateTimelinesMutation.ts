import { type UseMutationOptions, useMutation, useQueryClient } from '@tanstack/react-query'

import { createTimelines } from '@/lib/apis/timeline'
import { QueryKeys } from '@/lib/queryKeys'

const useCreateTimelinesMutation = (planId: number, options: UseMutationOptions) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createTimelines,
    onSuccess: (data, variables, context) => {
      // @ts-expect-error FIXME: Argument of type 'string[]' is not assignable to parameter of type 'void'.
      options?.onSuccess && options.onSuccess(data, variables, context)

      return queryClient.invalidateQueries(QueryKeys.PLAN(planId))
    },
  })
}

export default useCreateTimelinesMutation
