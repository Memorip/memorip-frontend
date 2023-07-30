import { type MeTab } from '@/types/route'

export const Tabs: Array<{
  name: string
  value: MeTab
}> = [
  { name: '내 여행', value: 'travel' },
  { name: '리뷰', value: 'review' },
  { name: '여행기', value: 'travelogue' },
]
