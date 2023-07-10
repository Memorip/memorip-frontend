export const queryKeys = {
  timelines: (planId: number) => ['timelines', planId],
  plan: (planId: number) => ['plan', planId],
} as const
