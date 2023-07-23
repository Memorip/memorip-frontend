import api from '@/lib/apis'
import { SearchSchema, type SearchParams } from '@/types/search'

export const searchByKeyword = async ({ keyword }: SearchParams) => {
  const response = await api.get(`/api/searchLocal?keyword=${keyword}`)
  return SearchSchema.parse(response.data)
}
