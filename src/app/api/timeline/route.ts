import { revalidateTag } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'

import { serverFetch } from '@/services/serverFetch'
import { tags } from '@/services/tags'

export async function POST(req: NextRequest) {
  const { type, date, memo, data, planId } = await req.json()

  const response = await serverFetch({
    url: '/api/timelines',
    auth: false,
    tags: [],
    options: {
      method: 'POST',
      body: JSON.stringify({
        type,
        date,
        memo,
        data,
        planId,
      }),
    },
  })

  const timelineResult = await response.json()

  if (!response.ok) {
    return NextResponse.json(timelineResult, { status: timelineResult.statusCode })
  }

  revalidateTag(tags.timelines)

  return NextResponse
}
