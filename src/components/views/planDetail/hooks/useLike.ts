import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'

import useGetUserIdFromCache from '@/features/auth/useGetUserIdFromCache'
import { likePlan } from '@/lib/apis/plan'

export const useLikeMutation = () => {
  return useMutation({
    mutationFn: likePlan,
  })
}

export const useLike = ({ planId }: { planId: number }) => {
  const likeMutation = useLikeMutation()
  const userId = useGetUserIdFromCache()

  const handleClickLike = () => {
    likeMutation.mutate(
      { planId, userId },
      {
        onSuccess: () => {
          toast.success('좋아요를 눌렀습니다.')
        },
      }
    )
  }

  return {
    handleClickLike,
  }
}
