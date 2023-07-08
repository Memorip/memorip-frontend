import { type NextRequest } from 'next/server'

import { parse } from 'cookie'

export const ACCESS_TOKEN = 'accessToken'

export const getAccessToken = () => typeof window !== 'undefined' && parse(document.cookie).accessToken

export const isAuthenticated = (request: NextRequest) => !!request.cookies.get(ACCESS_TOKEN)
