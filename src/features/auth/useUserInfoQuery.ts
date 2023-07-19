import { type UseQueryOptions, useQuery } from '@tanstack/react-query'

import { getUserInfo } from '@/lib/apis/auth'
import { QueryKeys } from '@/lib/queryKeys'
import { type UserInfo } from '@/types/auth'

const useUserInfoQuery = (options?: UseQueryOptions<UserInfo, Error, UserInfo>) => {
  return useQuery<UserInfo, Error, UserInfo>({
    queryKey: QueryKeys.USER_INFO,
    queryFn: getUserInfo,
    ...options,
  })
}

export default useUserInfoQuery
