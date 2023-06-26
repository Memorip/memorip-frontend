'use client'

import { useRouter } from 'next/navigation'

export default function Back() {
  const { back } = useRouter()

  return (
    <button onClick={back}>
      <i className='ri-arrow-left-line text-xl text-zinc-700' />
    </button>
  )
}
