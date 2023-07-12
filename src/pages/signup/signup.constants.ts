export const STEP = {
  SIGN_UP: 1,
  EMAIL_VERIFICATION: 2,
} as const

export type Step = (typeof STEP)[keyof typeof STEP]
