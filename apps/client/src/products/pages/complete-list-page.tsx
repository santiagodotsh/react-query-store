import { useProducts } from '../hooks/useProducts'
import { ProductList } from '../components/product-list'

export function CompleteListPage() {
  const { products } = useProducts()
  
  return (
    <div className='flex-col'>
      <h1 className='text-2xl font-bold'>
        All products
      </h1>

      {products.isLoading && <p>Loading...</p>}

      <ProductList products={products.data ?? []} />
    </div>
  )
}
