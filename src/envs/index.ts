export const NAVER_MAPS_APP = process.env.NEXT_PUBLIC_NAVER_MAPS_APP as string
export const NAVER_MAPS_CLIENT_ID = process.env.NEXT_PUBLIC_NAVER_MAPS_CLIENT_ID as string
export const NAVER_MAPS_CLIENT_SECRET = process.env.NEXT_PUBLIC_NAVER_MAPS_CLIENT_SECRET as string
export const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL as string

export type AppEnv = 'production' | 'development'

const getAppEnv = (): AppEnv => (process.env.NEXT_PUBLIC_APP_ENV as Exclude<AppEnv, 'development'>) || 'development'

export const getApiEndpoint = () => {
  switch (getAppEnv()) {
    case 'production':
      return SERVER_URL
    case 'development':
      return SERVER_URL
    default:
      return SERVER_URL
  }
}
