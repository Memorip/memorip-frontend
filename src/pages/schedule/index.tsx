import withAuth from '@/components/shared/withAuth'
import ScheduleView from '@/components/views/schedule/ScheduleView'

const Schedule = () => {
  return <ScheduleView />
}

export default withAuth(Schedule)
