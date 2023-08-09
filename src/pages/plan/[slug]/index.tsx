import { QueryClient, dehydrate } from '@tanstack/react-query'
import { type GetServerSideProps } from 'next'

import withAuth from '@/components/shared/withAuth'
import PlanDetailView from '@/components/views/planDetail/PlanDetailView'

import api from '@/lib/apis'
import { QueryKeys } from '@/lib/queryKeys'
import { type Plan, PlanSchema } from '@/types/plan'

const PlanDetail = () => {
  return <PlanDetailView />
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  const planId = Number(params?.slug)
  const queryClient = new QueryClient()

  const getPlan = async ({ planId, cookie }: { planId: number; cookie: string }) => {
    const response = await api.get<Plan>(`/api/plans/${planId}`, {
      headers: {
        cookie,
      },
    })
    return PlanSchema.parse(response.data)
  }

  await queryClient.prefetchQuery(QueryKeys.PLAN(planId), () => getPlan({ planId, cookie: req.headers.cookie ?? '' }))

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default withAuth(PlanDetail)
