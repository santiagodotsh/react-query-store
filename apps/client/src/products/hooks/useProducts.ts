import { useQuery } from '@tanstack/react-query'
import { getProducts } from '../services/actions'

interface Props {
  filterKey?: string
}

export function useProducts({ filterKey }: Props) {
  const products = useQuery({
    queryKey: ['products', { filterKey }],
    queryFn: () => getProducts({ filterKey }),
    staleTime: 1000 * 60 * 60
  })

  return {
    products
  }
}