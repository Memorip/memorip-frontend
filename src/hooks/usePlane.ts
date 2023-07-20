import { atom, useAtom } from 'jotai'

export interface Plan {
  id?: number
  userId?: number
  city?: string[]
  startDate?: string
  endDate?: string
  tripType?: string
  participants?: number[]
  createAt?: Date
  isPublic?: boolean
  views?: number
  likes?: number
}
const PLAN_DATA: Plan = {}

const planAtom = atom(PLAN_DATA)

export const usePlan = () => {
  const [plan, setPlan] = useAtom(planAtom)

  const addPlanAndDate = (cityName: string[], startDate: string, endDate: string) => {
    const newPlan = {
      city: cityName,
      startDate,
      endDate,
    }
    setPlan((prev) => ({ ...prev, ...newPlan }))
  }
  const addPlan = (cityName: string[]) => {
    addPlanAndDate(cityName, '', '')
  }

  const addDate = (dates: string[]) => {
    const cityName = plan?.city ?? []
    addPlanAndDate(cityName, dates[0], dates[dates.length - 1])
  }

  return {
    plan,
    addPlan,
    addDate,
    addPlanAndDate,
  }
}
