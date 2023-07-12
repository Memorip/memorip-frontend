import { type UseMutationOptions, useMutation, useQueryClient } from '@tanstack/react-query'

import { deleteTimelines } from '@/lib/apis/timeline'
import { queryKeys } from '@/lib/query-keys'

const useDeleteTimelinesMutation = (planId: number, options?: UseMutationOptions) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteTimelines,
    onSuccess: (data, variables, context) => {
      options?.onSuccess && options.onSuccess(data, variables, context)
      return queryClient.invalidateQueries(queryKeys.timelines(planId))
    },
  })
}

export default useDeleteTimelinesMutation
