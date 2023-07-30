import { useMutation } from '@tanstack/react-query'

import { updateTimeline } from '@/lib/apis/timeline'

export const useTimelineMutation = () => {
  return useMutation({
    mutationFn: updateTimeline,
  })
}
