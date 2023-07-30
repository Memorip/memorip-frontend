import { useMutation } from '@tanstack/react-query'

import { signIn } from '@/lib/apis/auth'

export const useSignInMutation = () => {
  return useMutation({
    mutationFn: signIn,
  })
}
