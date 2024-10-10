import { useQuery } from '@tanstack/react-query'
import { getProduct } from '../services/actions'

export function useProduct(id: number) {
  const product = useQuery({
    queryKey: ['product', id],
    queryFn: () => getProduct(id),
    staleTime: 1000 * 60 * 60
  })

  return {
    product
  }
}