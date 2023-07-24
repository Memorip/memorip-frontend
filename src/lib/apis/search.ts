import api from '@/lib/apis'
import { SearchSchema, type SearchParams } from '@/types/search'

export const searchByKeyword = async ({ keyword, sort = 'random' }: SearchParams) => {
  const response = await api.get(`/api/searchLocal?keyword=${keyword}&sort=${sort}`)
  return SearchSchema.parse(response.data)
}
