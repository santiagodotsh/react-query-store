import { useParams } from 'react-router-dom'
import { useProduct } from '../hooks/useProduct'
import { ProductCard } from '../components/product-card'

export function ProductPage() {
  const { id } = useParams()

  const { product } = useProduct(+id!)
  
  return (
    <div className='flex-col'>
      <h1 className='text-2xl font-bold'>
        Product {id}
      </h1>

      {product.isLoading && <p>Loading...</p>}

      {product.data && <ProductCard product={product.data} full />}
    </div>
  )
}
