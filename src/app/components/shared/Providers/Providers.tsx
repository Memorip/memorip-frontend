import AxiosProvider from '@/app/components/provider/AxiosProvider'
import ResponsiveHeightProvider from '@/app/components/provider/ResponsiveHeightProvider'
import QueryClientProvider from '@/app/components/provider/TanstackQueryProvider'
import ToastifyProvider from '@/app/components/provider/ToastifyProvider'

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
