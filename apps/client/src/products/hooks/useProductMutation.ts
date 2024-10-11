import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createProduct } from '../services/actions'

export function useProductMutation() {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: createProduct,
    onSuccess: (data) => {
      console.log(data)
      queryClient.invalidateQueries({
        queryKey: ['products', { filterKey: data.category }]
      })
    }
  })

  return {
    mutation
  }
}
