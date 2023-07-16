export const QueryKeys = {
  TIMELINES: (planId: number) => ['timelines', planId],
  PLAN: (planId: number) => ['plan', planId],
} as const
