import { atom, useAtom } from 'jotai'

export interface Plan {
  id?: number
  userId?: number
  city?: string[]
  startDate?: Date
  endDate?: Date
  tripType?: string
  participants?: number[]
  createAt?: Date
  isPublic?: boolean
  views?: number
  likes?: number
}
const PLAN_DATA: Plan[] = []

const planAtom = atom(PLAN_DATA)

export const usePlan = () => {
  const [plan, setPlan] = useAtom(planAtom)
  const addPlan = (cityName: string[]) => {
    const newPlan = {
      city: cityName,
    }
    setPlan([...plan, newPlan])
  }

  const addDate = (startDate: Date, endDate: Date) => {
    const newPlan = {
      startDate,
      endDate,
    }
    setPlan([...plan, newPlan])
  }

  return {
    plan,
    addPlan,
    addDate,
  }
}
