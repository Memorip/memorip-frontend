import React, { useState } from 'react'

import { QueryClient, QueryClientProvider as TanstackQueryProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

interface Props {
  children: React.ReactNode
}

export default function QueryClientProvider({ children }: Props) {
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          retry: false,
        },
      },
    })
  )

  return (
    <TanstackQueryProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      {children}
    </TanstackQueryProvider>
  )
}
