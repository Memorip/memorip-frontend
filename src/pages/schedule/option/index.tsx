import withAuth from '@/components/shared/withAuth'
import ScheduleOptionView from '@/components/views/schedule/option/ScheduleOptionView'

const Option = () => {
  return <ScheduleOptionView />
}

export default withAuth(Option)
