import { atom, useAtom } from 'jotai'

import type { CreatePlanParams, TripType } from '@/types/plan'

const initialPlanData: CreatePlanParams = {
  userId: 1,
  city: [],
  startDate: '',
  endDate: '',
  tripType: { partyOptions: [], styleOptions: [] },
  participants: [],
}

const planAtom = atom(initialPlanData)

export const usePlan = () => {
  const [plan, setPlan] = useAtom(planAtom)

  const addPlanAndDate = (
    // options: Partial<Pick<Plan, 'city' | 'startDate' | 'endDate' | 'tripType' | 'participants'>>
    options: Partial<CreatePlanParams>
  ) => {
    setPlan((prev) => ({ ...prev, ...options }))
  }
  const addPlan = (city: string[]) => {
    addPlanAndDate({ city })
  }

  const addDate = (dates: string[]) => {
    addPlanAndDate({ startDate: dates[0], endDate: dates[dates.length - 1] })
  }

  const addOption = (selected: TripType) => {
    addPlanAndDate({
      city: plan.city ?? [],
      startDate: plan?.startDate ?? '',
      endDate: plan?.endDate ?? '',
      tripType: selected,
      participants: [1],
    })

    console.log(JSON.parse(JSON.stringify(selected)))
  }

  return {
    plan,
    addPlan,
    addDate,
    addPlanAndDate,
    addOption,
  }
}
