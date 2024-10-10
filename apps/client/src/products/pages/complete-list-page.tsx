import { ProductList } from '../components/product-list'

export function CompleteListPage() {
  return (
    <div className='flex-col'>
      <h1 className='text-2xl font-bold'>
        All products
      </h1>

      <ProductList />
    </div>
  )
}
