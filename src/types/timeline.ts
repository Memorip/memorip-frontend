import { z } from 'zod'

export interface GetTimelinesParams {
  planId: number
}

export const TimeLineTypeSchema = z.union([z.literal('FLIGHT'), z.literal('PLACE'), z.literal('MEMO')])

export type TimeLineType = z.infer<typeof TimeLineTypeSchema>

export interface Timeline {
  id: number
  type: TimeLineType
  date: string
  memo: string
  data: string
  createdAt: string
  planId: number
}

export const TimelineSchema = z.object({
  id: z.number(),
  type: TimeLineTypeSchema,
  date: z.string(),
  memo: z.string(),
  data: z.string(),
  createdAt: z.string(),
  planId: z.number(),
})

export const TimelinesObjectSchema = z.record(z.array(TimelineSchema))

export type TimelinesObject = z.infer<typeof TimelinesObjectSchema>

export interface CreateTimelinesParams {
  locations: string[]
  planId: number
  date: string
}

export interface DeleteTimelinesParams {
  ids: string[]
}
