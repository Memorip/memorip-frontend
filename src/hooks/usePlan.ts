import { atom, useAtom } from 'jotai'

import type { Plan } from '@/types/plan'

const initialPlanData: Plan = {
  id: 0,
  userId: 0,
  city: [],
  startDate: '',
  endDate: '',
  tripType: [],
  participants: 0,
  createdAt: '',
  isPublic: false,
  views: 0,
  likes: 0,
}

const planAtom = atom(initialPlanData)

export const usePlan = () => {
  const [plan, setPlan] = useAtom(planAtom)

  const addPlanAndDate = (
    options: Partial<Pick<Plan, 'city' | 'startDate' | 'endDate' | 'tripType' | 'participants'>>
  ) => {
    setPlan((prev) => ({ ...prev, ...options }))
  }
  const addPlan = (city: string[]) => {
    addPlanAndDate({ city })
  }

  const addDate = (dates: string[]) => {
    addPlanAndDate({ startDate: dates[0], endDate: dates[dates.length - 1] })
  }

  const addOption = (selected: string[], people: number) => {
    addPlanAndDate({
      city: plan.city ?? [],
      startDate: plan?.startDate ?? '',
      endDate: plan?.endDate ?? '',
      tripType: selected,
      participants: people,
    })
  }

  return {
    plan,
    addPlan,
    addDate,
    addPlanAndDate,
    addOption,
  }
}
