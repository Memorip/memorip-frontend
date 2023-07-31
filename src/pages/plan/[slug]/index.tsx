import withAuth from '@/components/shared/withAuth'
import PlanDetailView from '@/components/views/planDetail/PlanDetailView'

const PlanDetail = () => {
  return <PlanDetailView />
}

export default withAuth(PlanDetail)
