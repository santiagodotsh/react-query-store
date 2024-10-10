import { fakeApi } from '../api/fake-api'
import { sleep } from '../../helpers/sleep'
import type { Product } from '../interfaces/product'

interface GetProductsProps {
  filterKey?: string
}

export async function getProducts({ filterKey }: GetProductsProps): Promise<Product[]> {
  const params = new URLSearchParams()

  if (filterKey) {
    params.append('category', filterKey)
  }

  const { data } = await fakeApi.get<Product[]>('/products', { params })

  await sleep(1000)
  
  return data
}