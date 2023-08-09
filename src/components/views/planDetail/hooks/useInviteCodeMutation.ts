import { useMutation } from '@tanstack/react-query'

import { createInviteCode } from '@/lib/apis/plan'

export const useInviteCodeMutation = () => {
  return useMutation({
    mutationFn: createInviteCode,
  })
}
