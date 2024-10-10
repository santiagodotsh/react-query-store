import { useQueryClient } from '@tanstack/react-query'
import { getProduct } from '../services/actions'

export function usePrefetchProduct() {
  const queryClient = useQueryClient()

  const prefetchData = (id: number) => {
    queryClient.prefetchQuery({
      queryKey: ['product', id],
      queryFn: () => getProduct(id),
      staleTime: 1000 * 60 * 60
    })
  }

  return {
    prefetchData
  }
}
