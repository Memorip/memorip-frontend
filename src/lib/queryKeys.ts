import { type Sort } from '@/types/search'

export const QueryKeys = {
  TIMELINE: (timelineId: number) => ['timeline', timelineId],
  TIMELINES: (planId: number) => ['timelines', planId],
  MY_PLAN: ['myPlan'],
  PLAN: (planId: number) => ['plan', planId],
  USER_INFO: ['userInfo'],
  SEARCH: (keyword: string, sort: Sort) => ['search', sort, keyword],
} as const
