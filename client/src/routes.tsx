import { createBrowserRouter } from 'react-router-dom'
import { Dashbaord, RestorePassword, SignIn } from './pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <SignIn />
  },
  {
    path: '/restore_password',
    element: <RestorePassword />
  },
  {
    path: '/dashboard',
    element: <Dashbaord />
  }
])
