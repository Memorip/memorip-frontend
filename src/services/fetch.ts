import { cookies } from 'next/headers'

import { SERVER_URL } from '@/envs'
import { ACCESS_TOKEN } from '@/features/auth/token'

interface RequestOptions extends RequestInit {
  baseUrl?: string
}

interface apiFetchOptions {
  url: string
  auth?: boolean
  options?: RequestOptions
}

export function apiFetch({ url, auth = true, options = {} }: apiFetchOptions): Promise<Response> {
  const { baseUrl, ...fetchOptions } = options
  const requestUrl = `${baseUrl ?? SERVER_URL}${url}`

  const headers = {
    'Content-Type': 'application/json',
    ...(auth ? { Authorization: `Bearer ${cookies().get(ACCESS_TOKEN)?.value as string}` } : {}),
    ...(fetchOptions.headers ?? {}),
  }

  return fetch(requestUrl, {
    ...fetchOptions,
    headers,
  })
}
