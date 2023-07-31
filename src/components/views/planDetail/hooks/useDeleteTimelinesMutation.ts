import { type UseMutationOptions, useMutation, useQueryClient } from '@tanstack/react-query'

import { deleteTimelines } from '@/lib/apis/timeline'
import { QueryKeys } from '@/lib/queryKeys'
import { type ServerResponse } from '@/types/api'
import { type DeleteTimelinesParams } from '@/types/timeline'

const useDeleteTimelinesMutation = (
  planId: number,
  options?: UseMutationOptions<ServerResponse<unknown>, unknown, DeleteTimelinesParams>
) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteTimelines,
    onSuccess: (data, variables, context) => {
      options?.onSuccess && options.onSuccess(data, variables, context)
      return queryClient.invalidateQueries(QueryKeys.TIMELINES(planId))
    },
  })
}

export default useDeleteTimelinesMutation
