import AxiosProvider from '@/components/provider/axios-provider'
import ResponsiveHeightProvider from '@/components/provider/responsive-height-provider'
import QueryClientProvider from '@/components/provider/tanstack-query-provider'
import ToastifyProvider from '@/components/provider/toastify-provider'

interface Props {
  children: React.ReactNode
}

export default function Providers({ children }: Props) {
  return (
    <QueryClientProvider>
      <AxiosProvider>
        <ResponsiveHeightProvider>
          <ToastifyProvider>{children}</ToastifyProvider>
        </ResponsiveHeightProvider>
      </AxiosProvider>
    </QueryClientProvider>
  )
}
