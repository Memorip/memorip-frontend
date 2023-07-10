import { type Plan } from '@/types/plan'

import api from '.'

export const getPlan = async (planId: number) => {
  return api.get<Plan>(`api/plans/${planId}`)
}
