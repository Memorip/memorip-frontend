import withAuth from '@/components/shared/withAuth'
import MainView from '@/components/views/main/MainView'

const Main = () => {
  return <MainView />
}

export default withAuth(Main)
