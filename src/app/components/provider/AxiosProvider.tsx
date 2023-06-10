'use client'

import { useAxiosInterceptor } from '@/hooks'

const AxiosProvider = ({ children }: { children: React.ReactNode }) => {
  useAxiosInterceptor()

  return <>{children}</>
}

export default AxiosProvider
