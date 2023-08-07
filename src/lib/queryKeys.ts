import { type Sort } from '@/types/search'

export const QueryKeys = {
  TIMELINE: (timelineId: number) => ['timeline', timelineId],
  TIMELINES: (planId: number) => ['timelines', planId],
  MY_PLAN: ['myPlan'],
  PLAN: (planId: number) => ['plan', planId],
  PLAN_SORTED_BY_LIKES: ['planSortedByLikes'],
  PLAN_SORTED_BY_VIEWS: ['planSortedByViews'],
  USER_INFO: ['userInfo'],
  SEARCH: (keyword: string, sort: Sort) => ['search', sort, keyword],
} as const
