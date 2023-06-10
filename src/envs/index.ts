export const NAVER_MAPS_APP = process.env.NEXT_PUBLIC_NAVER_MAPS_APP
export const NAVER_MAPS_CLIENT_ID = process.env.NEXT_PUBLIC_NAVER_MAPS_CLIENT_ID
export const NAVER_MAPS_CLIENT_SECRET = process.env.NEXT_PUBLIC_NAVER_MAPS_CLIENT_SECRET

export type AppEnv = 'production' | 'development'

const getAppEnv = (): AppEnv => (process.env.NEXT_PUBLIC_APP_ENV as Exclude<AppEnv, 'development'>) || 'development'

export const getApiEndpoint = () => {
  switch (getAppEnv()) {
    case 'production':
      return 'https://memory-trip.herokuapp.com'
    case 'development':
      return 'https://memory-trip.herokuapp.com'
    default:
      return 'https://memory-trip.herokuapp.com'
  }
}
