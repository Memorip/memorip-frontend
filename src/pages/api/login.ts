import { type NextApiRequest, type NextApiResponse } from 'next'

import { ACCESS_TOKEN } from '@/features/auth/token'
import { serverFetch } from '@/lib/serverFetch'
import { setCookie } from '@/utils/cookies'

interface LoginResult {
  data: {
    token: string
  }
  statusCode: number
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body

  const response = await serverFetch({
    url: '/api/login',
    auth: false,
    options: {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    },
  })

  const loginResult: LoginResult = await response.json()

  if (!loginResult.data) {
    res.status(loginResult.statusCode).json(loginResult)
    return
  }

  setCookie(res, ACCESS_TOKEN, loginResult.data.token, {
    expires: new Date(Date.now() + 60 * 60 * 24 * 1000),
    path: '/',
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
  })

  res.status(loginResult.statusCode).json(loginResult)
}
