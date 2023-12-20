import { Route, Routes } from 'react-router-dom'
import { Home, Register, RestorePassword } from './screens'

export const Router = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restore_password" element={<RestorePassword />} />
    </Routes>
  )
}
