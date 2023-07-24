import { atom, useAtom } from 'jotai'

export interface Plan {
  id?: number
  userId?: number
  city?: string[]
  startDate?: string
  endDate?: string
  tripType?: string[]
  participants?: number
  createAt?: Date
  isPublic?: boolean
  views?: number
  likes?: number
}

// const PLAN_KEY = 'plan_data'

const initialPlanData: Plan = {}
// if (typeof window !== 'undefined') {
//   initialPlanData = JSON.parse(localStorage.getItem(PLAN_KEY) ?? 'null') || {}
// }

const planAtom = atom(initialPlanData)

export const usePlan = () => {
  const [plan, setPlan] = useAtom(planAtom)

  // React.useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     localStorage.setItem(PLAN_KEY, JSON.stringify(plan))
  //   }
  // }, [plan])

  const addPlanAndDate = (
    options: Partial<Pick<Plan, 'city' | 'startDate' | 'endDate' | 'tripType' | 'participants'>>
  ) => {
    const newPlan = {
      ...options,
    }
    setPlan((prev) => ({ ...prev, ...newPlan }))
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
