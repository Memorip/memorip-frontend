import withAuth from '@/components/shared/withAuth'
import MeView from '@/components/views/me/MeView'

const Me = () => {
  return <MeView />
}

export default withAuth(Me)
