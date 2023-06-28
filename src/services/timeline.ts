import { cookies } from 'next/headers'

import { SERVER_URL } from '@/envs'
import { type Timeline } from '@/types/timeline'

// export const getTimelines = (planId: number) => api.get(`/api/timelines?planId=${planId}`)

export const getTimelines = async (planId: number): Promise<{ data: Timeline[] }> => {
  const cookieStore = cookies()
  const res = await fetch(`${SERVER_URL}/api/timelines?planId=${planId}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${cookieStore.get('accessToken')?.value as string}`,
    },
  })

  return res.json()
}
