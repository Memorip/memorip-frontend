export const queryKeys = {
  plan: (planId: number) => ['plan', planId],
  timelines: (planId: number) => ['timelines', planId],
} as const
