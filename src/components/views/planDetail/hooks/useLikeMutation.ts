import { useMutation } from '@tanstack/react-query'

import { likePlan } from '@/lib/apis/plan'

export const useLikeMutation = () => {
  return useMutation({
    mutationFn: likePlan,
  })
}
