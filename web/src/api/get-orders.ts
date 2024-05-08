import { api } from '@/lib/axios'

interface GetOrdersParams {
  pageIndex?: number | null
  orderId?: string | null
  customerName?: string | null
  status?: string | null
}

interface GetOrdersResponse {
  orders: {
    orderId: string
    createdAt: string
    status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
    customerName: string
    total: number
  }[]
  meta: {
    pageIndex: number
    perPage: number
    totalCount: number
  }
}

export async function getOrders({
  pageIndex,
  orderId,
  customerName,
  status,
}: GetOrdersParams) {
  const response = await api.get<GetOrdersResponse>('/orders', {
    params: {
      pageIndex,
      orderId,
      customerName,
      status: status === 'all' ? null : status,
    },
  })

  return response.data
}
