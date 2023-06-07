import ResponsiveHeightProvider from '@/components/provider/ResponsiveHeightProvider'
import QueryClientProvider from '@/components/provider/TanstackQueryProvider'
import ToastifyProvider from '@/components/provider/ToastifyProvider'

interface Props {
  children: React.ReactNode
}

const Providers = ({ children }: Props) => {
  return (
    <QueryClientProvider>
      <ResponsiveHeightProvider>
        <ToastifyProvider>{children}</ToastifyProvider>
      </ResponsiveHeightProvider>
    </QueryClientProvider>
  )
}

export default Providers
