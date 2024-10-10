import { createBrowserRouter } from 'react-router-dom'
import { StoreLayout } from '../products/layout/store-layout'
import { CompleteListPage } from '../products/pages/complete-list-page'
import { MensPage } from '../products/pages/mens-page'
import { WomensPage } from '../products/pages/womens-page'
import { NewProduct } from '../products/pages/new-product'
import { ProductPage } from '../products/pages/product-page'
import { ErrorPage } from '../error-page'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <StoreLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <CompleteListPage />
      },
      {
        path: 'men',
        element: <MensPage />
      },
      {
        path: 'women',
        element: <WomensPage />
      },
      {
        path: 'new',
        element: <NewProduct />
      },
      {
        path: 'product/:id',
        element: <ProductPage />
      }
    ]
  }
])
