export const QueryKeys = {
  TIMELINES: (planId: number) => ['timelines', planId],
  PLAN: (planId: number) => ['plan', planId],
  USER_INFO: ['userInfo'],
  SEARCH: (keyword: string) => ['search', keyword],
} as const
