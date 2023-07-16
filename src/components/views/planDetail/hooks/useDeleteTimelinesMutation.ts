import { type UseMutationOptions, useMutation, useQueryClient } from '@tanstack/react-query'

import { deleteTimelines } from '@/lib/apis/timeline'
import { QueryKeys } from '@/lib/queryKeys'

const useDeleteTimelinesMutation = (planId: number, options?: UseMutationOptions) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteTimelines,
    onSuccess: (data, variables, context) => {
      // @ts-expect-error FIXME: Argument of type 'string[]' is not assignable to parameter of type 'void'.
      options?.onSuccess && options.onSuccess(data, variables, context)
      return queryClient.invalidateQueries(QueryKeys.PLAN(planId))
    },
  })
}

export default useDeleteTimelinesMutation
