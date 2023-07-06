import { serverFetch } from '@/lib/serverFetch'
import { tags } from '@/lib/tags'
import { type Plan } from '@/types/plan'

export const getPlan = async (planId: number): Promise<{ data: Plan }> => {
  const res = await serverFetch({
    url: `/api/plans/${planId}`,
    tags: [tags.plan(planId)],
    options: {
      method: 'GET',
    },
  })

  const { ok, status } = res

  if (!ok) {
    console.log(await res.json())

    if (status === 401) {
      throw new Error('로그인이 필요합니다.')
    }

    throw new Error('여행 상세 정보를 불러오는데 실패했습니다.')
  }

  return await res.json()
}
