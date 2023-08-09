import { useQueryClient } from '@tanstack/react-query'

import { QueryKeys } from '@/lib/queryKeys'
import { type UserInfo } from '@/types/auth'

const useGetUserIdFromCache = () => {
  const queryClient = useQueryClient()
  const userInfo = queryClient.getQueryData<UserInfo>(QueryKeys.USER_INFO)

  if (!userInfo) {
    throw new Error('캐싱된 유저 정보가 없습니다.')
  }

  return userInfo.id
}

export default useGetUserIdFromCache
