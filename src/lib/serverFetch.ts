import { cookies } from 'next/headers'

import { SERVER_URL } from '@/envs'
import { ACCESS_TOKEN } from '@/features/auth/token'

interface RequestOptions extends RequestInit {
  baseUrl?: string
}

interface ServerFetchOptions {
  url: string
  tags?: string[]
  auth?: boolean
  options?: RequestOptions
}

export function serverFetch({ url, tags, auth = true, options = {} }: ServerFetchOptions): Promise<Response> {
  const { baseUrl, ...fetchOptions } = options
  const requestUrl = `${baseUrl ?? SERVER_URL}${url}`

  const headersOption = {
    'Content-Type': 'application/json',
    ...(auth ? { Cookie: `${ACCESS_TOKEN}=${cookies().get(ACCESS_TOKEN)?.value as string}` } : {}),
    ...(fetchOptions.headers ?? {}),
  }

  return fetch(requestUrl, {
    ...fetchOptions,
    headers: headersOption,
    next: {
      tags,
    },
  })
}
