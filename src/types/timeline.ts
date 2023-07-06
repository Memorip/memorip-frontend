export type TimeLineType = 'FLIGHT' | 'PLACE' | 'MEMO'

export type TimelinesObject = Record<string, Timeline[]>

export interface Timeline {
  id: number
  type: TimeLineType
  date: string
  memo: string
  data: string
  createdAt: string
  planId: number
}
