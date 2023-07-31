import { useRouter } from 'next/router'

import ROUTE from '@/constants/route'
import useUserInfoQuery from '@/features/auth/useUserInfoQuery'

const withAuth = (Component: React.FC) => {
  const AuthComponent = (props: any) => {
    const userInfoQuery = useUserInfoQuery()
    const router = useRouter()
    const unauthenticatedPaths: string[] = [ROUTE.HOME, ROUTE.SIGN_IN, ROUTE.SIGN_UP]
    const isAuthenticatedPaths = !unauthenticatedPaths.includes(router.pathname)

    if (userInfoQuery.isLoading) {
      return null
    }

    if (isAuthenticatedPaths && userInfoQuery.isError) {
      router.push(ROUTE.SIGN_IN)
    }

    return <Component {...props} />
  }

  return AuthComponent
}

export default withAuth
