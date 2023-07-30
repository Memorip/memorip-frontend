import withAuth from '@/components/shared/withAuth'
import MapView from '@/components/views/map/MapView'

const Map = () => {
  return <MapView />
}

export default withAuth(Map)
