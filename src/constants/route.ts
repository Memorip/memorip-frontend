import { type MeTab } from '@/types/route'

const ROUTE = {
  HOME: '/',
  SIGN_IN: '/login',
  SIGN_UP: '/signup',
  MAIN: '/main',
  MAP: '/map',
  PLAN: (planId: number) => `/plan/${planId}`,
  SCHEDULE_PLAN: '/schedule/plan',
  SEARCH: (planId: number, date: string) => `/search?planId=${planId}&date=${date}`,
  ME: (tab: MeTab) => {
    return `/me?tab=${tab}`
  },
} as const

export default ROUTE
