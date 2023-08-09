import { useRouter } from 'next/router'

import { createContext, useContext } from 'react'

import Spinner from '@/components/shared/Spinner'
import { useTimelinesObjectQuery } from '@/components/views/planDetail/hooks/useTimelinesObjectQuery'

import { usePlanQuery } from '@/features/plan/usePlanQuery'
import { type Plan } from '@/types/plan'
import { type TimelinesObject } from '@/types/timeline'

export const PlanContext = createContext<{
  plan: Plan
  timelinesObject: TimelinesObject
} | null>(null)

export const usePlanContext = () => {
  const plan = useContext(PlanContext)

  if (!plan) {
    throw new Error('PlanContext is not provided')
  }

  return plan
}

export const PlanContextProvider = ({ children }: { children: React.ReactNode }) => {
  const { query } = useRouter()
  const planId = Number(query.slug)
  const planQueries = usePlanQuery(planId)
  const timelinesObjectQuery = useTimelinesObjectQuery(planId)

  if (planQueries.isLoading || timelinesObjectQuery.isLoading) {
    return (
      <div className='flex h-screen w-full items-center justify-center'>
        <Spinner />
      </div>
    )
  }

  if (!planQueries.isSuccess || !timelinesObjectQuery.isSuccess) {
    return null
  }

  return (
    <PlanContext.Provider
      value={{
        plan: planQueries.data,
        timelinesObject: timelinesObjectQuery.data,
      }}
    >
      {children}
    </PlanContext.Provider>
  )
}
