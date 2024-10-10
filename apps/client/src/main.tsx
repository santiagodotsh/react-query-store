import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { NextUIProvider } from '@nextui-org/react'
import { TanStackProvider } from './plugins/tanstack-provider'
import { router } from './router'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TanStackProvider>
      <NextUIProvider>
        <main className='dark text-foreground bg-background'>
          <RouterProvider router={router} />
        </main>
      </NextUIProvider>
    </TanStackProvider>
  </StrictMode>
)
