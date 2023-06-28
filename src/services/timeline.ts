import { apiFetch } from '@/services/fetch'
import { type Timeline } from '@/types/timeline'

export const getTimelines = async (planId: number): Promise<{ data: Timeline[] }> => {
  const res = await apiFetch(`/api/timelines?planId=${planId}`)

  return res.json()
}
