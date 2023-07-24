import { type Sort } from '@/types/search'

export const QueryKeys = {
  TIMELINES: (planId: number) => ['timelines', planId],
  PLAN: (planId: number) => ['plan', planId],
  USER_INFO: ['userInfo'],
  SEARCH: (keyword: string, sort: Sort) => ['search', sort, keyword],
} as const
