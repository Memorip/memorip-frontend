import { toast } from 'react-toastify'

import useGetUserIdFromCache from '@/features/auth/useGetUserIdFromCache'

import { useLikeMutation } from './useLikeMutation'

interface UseLikeParams {
  planId: number
}

export const useLike = ({ planId }: UseLikeParams) => {
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
