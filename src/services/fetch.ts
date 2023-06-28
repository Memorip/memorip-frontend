import { cookies } from 'next/headers'

import { SERVER_URL } from '@/envs'

interface RequestOptions extends RequestInit {
  baseUrl?: string
}

export function apiFetch(url: string, options: RequestOptions = {}): Promise<Response> {
  const { baseUrl, ...fetchOptions } = options
  const requestUrl = `${baseUrl ?? SERVER_URL}${url}`

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${cookies().get('accessToken')?.value as string}`,
    ...(fetchOptions.headers ?? {}),
  }

  return fetch(requestUrl, {
    ...fetchOptions,
    headers,
  })
}
