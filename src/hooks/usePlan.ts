import { atom, useAtom } from 'jotai'

import type { CreatePlanParams } from '@/types/plan'

const initialPlanData: CreatePlanParams = {
  userId: 1,
  city: [],
  startDate: '',
  endDate: '',
  tripType: { partyOptions: [], styleOptions: [] },
  participants: [],
  isPublic: false,
}

const planAtom = atom(initialPlanData)

export const usePlan = () => {
  const [plan, setPlan] = useAtom(planAtom)

  const addPlanAndDate = (options: Partial<CreatePlanParams>) => {
    setPlan((prev) => ({ ...prev, ...options }))
  }
  const addPlan = (city: string[]) => {
    addPlanAndDate({ city })
  }

  const addDate = (dates: string[]) => {
    addPlanAndDate({ startDate: dates[0], endDate: dates[dates.length - 1] })
  }

  return {
    plan,
    addPlan,
    addDate,
    addPlanAndDate,
  }
}
