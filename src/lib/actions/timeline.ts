'use server'

import { revalidateTag } from 'next/cache'
import { redirect } from 'next/navigation'

import { TIMELINE_TYPE } from '@/constants/timelineType'
import { serverFetch } from '@/lib/serverFetch'
import { tags } from '@/lib/tags'
import { type Timeline } from '@/types/timeline'

export async function createTimelines(locations: string[], planId: number, date: string) {
  const timelines: Array<{
    type: Timeline['type']
    date: Timeline['date']
    memo: Timeline['memo']
    data: Timeline['data']
    planId: Timeline['planId']
  }> = []

  console.log(date)

  for (const location of locations) {
    timelines.push({
      type: TIMELINE_TYPE.PLACE,
      date,
      // FIXME: 사용자가 선택한 메모로 변경
      memo: '여행지',
      data: location,
      planId,
    })
  }

  const res = await serverFetch({
    url: '/api/timelines',
    tags: [tags.timelines],
    options: {
      method: 'POST',
      body: JSON.stringify(timelines),
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

  redirect(`/plan/${planId}`)
}

export async function deleteTimelines(ids: string[]) {
  const res = await serverFetch({
    url: `/api/timelines?ids=${ids.join(',')}`,
    tags: [tags.timelines],
    options: {
      method: 'DELETE',
    },
  })

  const result = await res.json()

  if (!res.ok) {
    console.log(result)
    if (result.statusCode === 401) {
      throw new Error('로그인이 필요해요.')
    }

    throw new Error('타임 라인을 삭제하는데 실패했어요.')
  }

  revalidateTag(tags.timelines)

  return result
}
