import { apiFetch } from '@/services/fetch'
import { type Timeline } from '@/types/timeline'

export const getTimelines = async (planId: number): Promise<{ data: Timeline[] }> => {
  const res = await apiFetch(`/api/timelines?planId=${planId}`)

  if (!res.ok) {
    throw new Error(`타임 라인을 불러오는데 실패했습니다.`)
  }

  return await res.json()
}
