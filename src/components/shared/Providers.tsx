import AxiosProvider from '@/components/provider/AxiosProvider'
import QueryClientProvider from '@/components/provider/QueryClientProvider'
import ResponsiveHeightProvider from '@/components/provider/ResponsiveHeightProvider'
import ToastifyProvider from '@/components/provider/ToastifyProvider'

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
