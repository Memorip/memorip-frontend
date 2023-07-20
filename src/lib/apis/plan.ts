import api from '@/lib/apis'
import { PlanSchema, type Plan, type GetPlanParams } from '@/types/plan'

export const getPlan = async ({ planId }: GetPlanParams) => {
  const response = await api.get<Plan>(`api/plans/${planId}`)
  return PlanSchema.parse(response.data)
}
