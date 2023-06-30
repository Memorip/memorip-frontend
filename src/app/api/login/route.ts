import { type NextRequest, NextResponse } from 'next/server'

import { ACCESS_TOKEN } from '@/features/auth/token'
import { apiFetch } from '@/services/fetch'

interface LoginResult {
  data: {
    token: string
  }
  statusCode: number
}

export async function POST(req: NextRequest, res: NextResponse, next: () => void) {
  const { email, password } = await req.json()

  const response = await apiFetch({
    url: '/api/login',
    auth: false,
    options: {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    },
  })

  const loginResult: LoginResult = await response.json()

  if (!loginResult.data) {
    return NextResponse.json(loginResult, { status: loginResult.statusCode })
  }

  const nextResponse = NextResponse.json({ res: loginResult }, { status: 200 })

  const expirationDate = new Date()
  expirationDate.setDate(expirationDate.getDate() + 1)

  nextResponse.cookies.set({
    name: ACCESS_TOKEN,
    value: loginResult.data.token,
    httpOnly: true,
    expires: expirationDate,
    secure: true,
    sameSite: 'lax',
  })

  return nextResponse
}
