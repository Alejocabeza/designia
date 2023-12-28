import { Route, Routes } from 'react-router-dom'
import {
  Address,
  Client,
  ClientOffice,
  Dashboard,
  Login,
  NotFound,
  Profile,
  Project,
  RestorePassword,
  SendEmailRestorePassword
} from './screens'

export const Router = (): JSX.Element => {
  return (
    <Routes>
      {/*Auth Route*/}
      <Route path="/" element={<Login />} />
      <Route path="/send_email_restore_password" element={<SendEmailRestorePassword />} />
      <Route path="/forgot_password" element={<RestorePassword />} />
      <Route path="/profile" element={<Profile />} />
      {/*Other Route*/}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/clients" element={<Client />} />
      <Route path="/projects" element={<Project />} />
      <Route path="/client_office" element={<ClientOffice />} />
      <Route path="/address" element={<Address />} />
      {/*Page Not Found*/}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
