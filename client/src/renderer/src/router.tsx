import { createBrowserRouter } from 'react-router-dom'
import { Home } from './screens'
import ForgotPassword from './screens/ForgotPassword'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/forgot_password',
    element: <ForgotPassword />
  }
])
