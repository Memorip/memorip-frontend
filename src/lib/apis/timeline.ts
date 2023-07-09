import { TIMELINE_TYPE } from '@/constants/timelineType'
import api from '@/lib/apis'
import { type Timeline } from '@/types/timeline'

type TimeLinesObject = Record<string, Timeline[]>

export const getTimelinesObject = (planId: number) => {
  return api.get<TimeLinesObject>(`/api/timelines?planId=${planId}`)
}

export const createTimelines = (locations: string[], planId: number, date: string) => {
  const timelines: Array<{
    type: Timeline['type']
    date: Timeline['date']
    memo: Timeline['memo']
    data: Timeline['data']
    planId: Timeline['planId']
  }> = []

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

  return api.post('/api/timelines', timelines)
}

export const deleteTimelines = (ids: string[]) => {
  return api.delete(`/api/timelines?ids=${ids.join(',')}`)
}
