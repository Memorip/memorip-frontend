import api from '@/lib/apis'
import {
  type Plan,
  type CreatePlanParams,
  type GetPlanParams,
  type GetMyPlansParams,
  PlansSchema,
  PlanSchema,
  type CreatePlanResponse,
  CreatePlanResponseSchema,
  type LikePlanParams,
  type CreateInviteCodeParams,
  CreateInviteCodeSchema,
} from '@/types/plan'

export const getPlan = async ({ planId }: GetPlanParams) => {
  const response = await api.get<Plan>(`/api/plans/${planId}`)
  return PlanSchema.parse(response.data)
}

export const getPlanSortedByLikes = async () => {
  const response = await api.get<Plan[]>('/api/plans/like/sort')
  return PlansSchema.parse(response.data)
}

export const getPlanSortedByViews = async () => {
  const response = await api.get<Plan[]>('/api/plans/view/sort')
  return PlansSchema.parse(response.data)
}

export const getMyPlans = async ({ userId }: GetMyPlansParams) => {
  const response = await api.get<Plan[]>(`/api/plans/user/${userId}`)
  return PlansSchema.parse(response.data)
}

export const createPlan = async (plan: CreatePlanParams) => {
  const response = await api.post<CreatePlanResponse>('/api/plans/add', {
    ...plan,
    tripType: JSON.stringify(plan.tripType),
  })
  return CreatePlanResponseSchema.parse(response.data)
}

export const likePlan = async ({ planId, userId }: LikePlanParams) => {
  return api.post('/api/plan/likes', {
    planId,
    userId,
  })
}

export const createInviteCode = async ({ planId }: CreateInviteCodeParams) => {
  const response = await api.post('/api/invitations', {
    planId,
  })
  return CreateInviteCodeSchema.parse(response.data)
}
