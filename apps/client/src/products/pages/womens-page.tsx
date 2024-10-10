import { useProducts } from '../hooks/useProducts'
import { ProductList } from '../components/product-list'

export function WomensPage() {
  const { products } = useProducts({ filterKey: "women's clothing" })

  return (
    <div className='flex-col'>
      <h1 className='text-2xl font-bold'>
        Products for women
      </h1>

      {products.isLoading && <p>Loading...</p>}

      <ProductList products={products.data ?? []} />
    </div>
  )
}