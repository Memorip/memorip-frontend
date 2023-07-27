export interface Plan {
  id: number
  userId: number
  city: string[]
  startDate: string
  endDate: string
  tripType: string[]
  participants: number
  createdAt: string
  isPublic: boolean
  views: number
  likes: number
}
