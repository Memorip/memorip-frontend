import ResponsiveHeightProvider from '@/app/components/provider/ResponsiveHeightProvider'
import QueryClientProvider from '@/app/components/provider/TanstackQueryProvider'
import ToastifyProvider from '@/app/components/provider/ToastifyProvider'

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
