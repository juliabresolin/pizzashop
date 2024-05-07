import { api } from '@/lib/axios'

interface GetManageRestaurantResponse {
  id: string
  name: string
  description: string | null
  managerId: string | null
  createdAt: Date | null
  updatedAt: Date | null
}

export async function getManageRestaurant() {
  const response = await api.get<GetManageRestaurantResponse>(
    '/managed-restaurant',
  )

  return response.data
}
