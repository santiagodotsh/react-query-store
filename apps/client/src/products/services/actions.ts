import { fakeApi } from '../api/fake-api'
import { sleep } from '../../helpers/sleep'
import type { Product } from '../interfaces/product'

export async function getProducts(filterKey?: string): Promise<Product[]> {
  const params = new URLSearchParams()

  if (filterKey) {
    params.append('category', filterKey)
  }

  const { data } = await fakeApi.get<Product[]>('/products', { params })

  await sleep(1000)
  
  return data
}

export async function getProduct(id: string): Promise<Product> {
  const { data } = await fakeApi.get<Product>(`/products/${id}`)

  await sleep(1000)
  
  return data
}

export async function createProduct(product: Omit<Product, 'id'>) {
  const { data } = await fakeApi.post<Product>('/products', product)

  await sleep(5000)

  return data
}
