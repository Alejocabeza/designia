import { Route, Routes } from 'react-router-dom'
import { Dashboard, Login } from './screens'

export const Router = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<Login />} />
    </Routes>
  )
}
