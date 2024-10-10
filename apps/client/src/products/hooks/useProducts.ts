import { useQuery } from '@tanstack/react-query'
import { getProducts } from '../services/actions'

export function useProducts(filterKey?: string) {
  const products = useQuery({
    queryKey: ['products', { filterKey }],
    queryFn: () => getProducts(filterKey),
    staleTime: 1000 * 60 * 60
  })

  return {
    products
  }
}
