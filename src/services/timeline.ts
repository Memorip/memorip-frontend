import { apiFetch } from '@/services/fetch'
import { type Timeline } from '@/types/timeline'

export const getTimelines = async (planId: number): Promise<{ data: Timeline[] }> => {
  const res = await apiFetch({
    url: `/api/timelines?planId=${planId}`,
    options: {
      method: 'GET',
    },
  })

  const { ok, status } = res

  if (status === 401) {
    throw new Error('로그인이 필요합니다.')
  }

  if (!ok) {
    throw new Error('타임 라인을 불러오는데 실패했습니다.')
  }

  return await res.json()
}
