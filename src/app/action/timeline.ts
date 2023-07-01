'use server'

import { revalidateTag } from 'next/cache'

import { serverFetch } from '@/services/serverFetch'
import { tags } from '@/services/tags'
import { type TimeLineType } from '@/types/timeline'

export async function createTimeline({
  type,
  date,
  memo,
  data,
  planId,
}: {
  type: TimeLineType
  date: string
  memo: string
  data: string
  planId: number
}) {
  const res = await serverFetch({
    url: '/api/timelines',
    tags: [tags.timelines],
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

  const result = await res.json()

  if (!res.ok) {
    console.log(result)
    if (result.statusCode === 401) {
      throw new Error('로그인이 필요해요.')
    }

    throw new Error('타임 라인을 생성하는데 실패했어요.')
  }

  revalidateTag(tags.timelines)

  return result
}
