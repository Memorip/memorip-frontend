'use client' // Error components must be Client Components

import Link from 'next/link'

import { useEffect } from 'react'

import ROUTE from '@/constants/route'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className='mt-24 flex flex-col items-center justify-center'>
      <h2>Error: {error.message}</h2>
      <Link
        className='mt-4 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50'
        href={ROUTE.HOME}
      >
        Go back home
      </Link>
    </div>
  )
}
