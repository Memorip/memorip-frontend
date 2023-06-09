const ROUTE = {
  HOME: '/',
  SIGN_IN: '/login',
  SIGN_UP: '/signup',
  MAIN: '/main',
  MAP: '/map',
  PLAN: (planId: number) => `/plan/${planId}`,
  SEARCH: (planId: number, date: string) => `/search?planId=${planId}&date=${date}`,
} as const

export default ROUTE
