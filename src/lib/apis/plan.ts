import api from '@/lib/apis'
import type { Plan, CreatePlanParams } from '@/types/plan'

export const getPlan = async (planId: number) => {
  return api.get<Plan>(`/api/plans/${planId}`)
}

export const createPlan = async (plan: CreatePlanParams) => {
  return api.post<Plan>('/api/plans/add', {
    ...plan,
    tripType: JSON.stringify(plan.tripType),
  })
}
