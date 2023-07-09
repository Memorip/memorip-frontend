import api from '@/lib/apis'
import { type Plan } from '@/types/plan'

export const getPlan = (planId: number) => {
  return api.get<Plan>(`/api/plans/${planId}`)
}
