import { createBrowserRouter } from 'react-router-dom'
import { Dashbaord, RestorePassword, SendEmailRestorePassword, SignIn } from './pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <SignIn />
  },
  {
    path: '/send_email_restore_password',
    element: <SendEmailRestorePassword />
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
