const ROUTE = {
  HOME: '/',
  SIGN_IN: '/login',
  SIGN_UP: '/signup',
  MAIN: '/main',
  MAP: '/map',
  PLAN: (planId: number) => `/plan/${planId}`,
  SEARCH: (planId: number) => `/search?planId=${planId}`,
} as const

export default ROUTE
