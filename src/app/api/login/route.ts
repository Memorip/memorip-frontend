import { type NextRequest, NextResponse } from 'next/server'

import { SERVER_URL } from '@/envs'

interface LoginResult {
  data: {
    token: string
  }
}

export async function POST(request: NextRequest) {
  const { email, password } = await request.json()

  const response = await fetch(`${SERVER_URL}/api/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })

  const loginResult: LoginResult = await response.json()

  const nextResponse = NextResponse.json({ res: loginResult }, { status: 200 })

  const expirationDate = new Date()
  expirationDate.setDate(expirationDate.getDate() + 1)

  nextResponse.cookies.set({
    name: 'accessToken',
    value: loginResult.data.token,
    httpOnly: true,
    expires: expirationDate,
    secure: true,
    sameSite: 'strict',
  })

  return nextResponse
}
