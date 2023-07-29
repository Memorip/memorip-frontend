import { z } from 'zod'

export type Sort = 'random' | 'comment'

export interface SearchParams {
  keyword: string
  sort?: Sort
}

export const SearchSchema = z.array(
  z.object({
    title: z.string(),
    category: z.string(),
    address: z.string(),
    roadAddress: z.string(),
    homePageLink: z.string(),
    imageLink: z.string(),
    mapx: z.number(),
    mapy: z.number(),
  })
)

export type Search = z.infer<typeof SearchSchema>
