import { z } from 'zod'

export interface GetPlanParams {
  planId: number
}

export const PlanSchema = z.object({
  id: z.number(),
  userId: z.number(),
  city: z.array(z.string()),
  startDate: z.string(),
  endDate: z.string(),
  tripType: z.string(),
  participants: z.array(z.number()),
  createdAt: z.string(),
  isPublic: z.boolean(),
  views: z.number(),
  likes: z.number(),
})

export type Plan = z.infer<typeof PlanSchema>
