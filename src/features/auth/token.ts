import { type NextRequest } from 'next/server'

import dayjs from 'dayjs'
import Cookies from 'js-cookie'

export const ACCESS_TOKEN = 'accessToken'

export const isAuthenticated = (request: NextRequest) => !!request.cookies.get(ACCESS_TOKEN)

export const getAccessTokenFromCookie = () => {
  return Cookies.get(ACCESS_TOKEN)
}

export const setAccessTokenToCookie = (token: string) => {
  Cookies.set(ACCESS_TOKEN, token, {
    expires: dayjs().add(1, 'day').toDate(),
    secure: true,
    sameSite: 'lax',
  })
}
