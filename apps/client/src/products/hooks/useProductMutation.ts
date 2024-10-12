import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createProduct } from '../services/actions'
import { Product } from '../interfaces/product'

export function useProductMutation() {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: createProduct,
    onMutate: (product) => {
      const optimisticProduct: Product = { id: Math.random().toString(), ...product }

      queryClient.setQueryData<Product[]>(
        ['products', { filterKey: product.category }],
        (old) => {
          if (!old) {
            return [optimisticProduct]
          }

          return [...old, optimisticProduct]
        }
      )

      return {
        optimisticProduct
      }
    },
    onSuccess: (product, _variables, context) => {
      // queryClient.invalidateQueries({
      //   queryKey: ['products', { filterKey: data.category }]
      // })

      queryClient.removeQueries({
        queryKey: ['products', { id: context.optimisticProduct.id }],

      })

      queryClient.setQueryData<Product[]>(
        ['products', { filterKey: product.category }],
        (old) => {
          if (!old) {
            return [product]
          }

          return old.map(cacheProduct => {
            return cacheProduct.id === context?.optimisticProduct.id ? product : cacheProduct
          })
        }
      )
    },
    onError: (error, variables, context) => {
      queryClient.removeQueries({
        queryKey: ['products', { id: context?.optimisticProduct.id }],
        
      })

      queryClient.setQueryData<Product[]>(
        ['products', { filterKey: variables.category }],
        (old) => {
          if (!old) {
            return []
          }

          return old.filter(cacheProduct => {
            return cacheProduct.id !== context?.optimisticProduct.id
          })
        }
      )
    }
  })

  return {
    mutation
  }
}
