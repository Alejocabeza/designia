import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/index.css'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
)
