import api from '@/lib/apis'
import { PlanSchema, type Plan, type GetPlanParams, PlansSchema, type GetMyPlansParams } from '@/types/plan'

export const getPlan = async ({ planId }: GetPlanParams) => {
  const response = await api.get<Plan>(`/api/plans/${planId}`)
  return PlanSchema.parse(response.data)
}

export const getMyPlans = async ({ userId }: GetMyPlansParams) => {
  const response = await api.get<Plan[]>(`/api/plans/user/${userId}`)
  return PlansSchema.parse(response.data)
}
