import { type NextRequest } from 'next/server'

export const ACCESS_TOKEN = 'accessToken'

export const isAuthenticated = (request: NextRequest) => !!request.cookies.get(ACCESS_TOKEN)
