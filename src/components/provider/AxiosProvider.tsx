import { useAxiosInterceptor } from '@/hooks'

export default function AxiosProvider({ children }: { children: React.ReactNode }) {
  useAxiosInterceptor()

  return <>{children}</>
}
