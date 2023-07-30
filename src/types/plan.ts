import { z } from 'zod'

export interface GetPlanParams {
  planId: number
}

export const TripTypeSchema = z.object({
  partyOptions: z.array(z.string()),
  styleOptions: z.array(z.string()),
})

export type TripType = z.infer<typeof TripTypeSchema>

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

export interface GetMyPlansParams {
  userId: number
}

export const PlansSchema = z.array(PlanSchema)

export const CreatePlanParamsSchema = z.object({
  userId: z.number(),
  city: z.array(z.string()),
  startDate: z.string(),
  endDate: z.string(),
  tripType: TripTypeSchema,
  participants: z.array(z.number()),
})

export type CreatePlanParams = z.infer<typeof CreatePlanParamsSchema>
