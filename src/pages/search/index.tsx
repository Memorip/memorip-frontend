import withAuth from '@/components/shared/withAuth'
import SearchView from '@/components/views/search/SearchView'

const Search = () => {
  return <SearchView />
}

export default withAuth(Search)
