import { type NextRequest, NextResponse } from 'next/server'

import { accessToken } from '@/constants/token'
import { apiFetch } from '@/services/fetch'

interface LoginResult {
  data: {
    token: string
  }
}

export async function POST(req: NextRequest, res: NextResponse, next: () => void) {
  const { email, password } = await req.json()

  const response = await apiFetch('/api/login', {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
    }),
  })

  const loginResult: LoginResult = await response.json()

  if (!loginResult.data) {
    return NextResponse.json(loginResult, { status: loginResult.statusCode })
  }

  const nextResponse = NextResponse.json({ res: loginResult }, { status: 200 })

  const expirationDate = new Date()
  expirationDate.setDate(expirationDate.getDate() + 1)

  nextResponse.cookies.set({
    name: accessToken,
    value: loginResult.data.token,
    httpOnly: true,
    expires: expirationDate,
    secure: true,
    sameSite: 'strict',
  })

  return nextResponse
}
