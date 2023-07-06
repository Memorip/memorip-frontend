import { serverFetch } from '@/lib/serverFetch'

export const getTimelines = async (planId: number) => {
  const res = await serverFetch({
    url: `/api/timelines?planId=${planId}`,
    options: {
      method: 'GET',
      cache: 'no-cache',
    },
  })

  if (!res.ok) {
    throw new Error('타임 라인를 불러오는데 실패했습니다.')
  }

  return await res.json()
}
