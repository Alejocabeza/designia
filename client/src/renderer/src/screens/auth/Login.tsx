import { Button, Input, Label, ModalErrors } from '@renderer/components'
import { useSignUser } from '@renderer/screens/auth/hooks/useSignInUser'
import { Handles } from '@renderer/utils'
import { Link, Navigate } from 'react-router-dom'
import imgAvif from '../../assets/pictures/buildingPicture.avif'
import imgJpg from '../../assets/pictures/buildingPicture.jpg'
import imgWebp from '../../assets/pictures/buildingPicture.webp'
import { userStore } from './store/userStore'
import { useEffect } from 'react'

export const Login = (): JSX.Element => {
  const userLogin = useSignUser()
  const { addUser } = userStore()
  const { handleSubmit } = Handles(userLogin)

  useEffect(() => {
    if (userLogin.isSuccess) {
      window.localStorage.setItem('user_logged', JSON.stringify(true))
      addUser(userLogin.data)
    }
  }, [userLogin.isSuccess, userLogin.data, addUser])

  if (userLogin.isSuccess) {
    return <Navigate to="/dashboard" />
  }

  return (
    <div className="h-screen flex flex-col w-screen justify-center items-center bg-gray-200">
      <div className="flex justify-between items-center flex-row w-[70%] sm:h-[80%] lg:h-[70%]  bg-[#fff] rounded-lg shadow-md overflow-hidden">
        <div className="flex justify-center items-center flex-col h-full w-[50%] sm:hidden xl:flex lg:flex">
          <picture className="w-full h-full">
            <source
              srcSet={imgAvif}
              type="image/avif"
              className="w-full h-full object-cover object-center"
            />
            <source
              srcSet={imgWebp}
              type="image/webp"
              className="w-full h-full object-cover object-center"
            />
            <img src={imgJpg} alt="building" className="w-full h-full object-cover object-center" />
          </picture>
        </div>
        <div className="flex justify-center items-center gap-4 sm:border-0 xl:border-l lg:border-l flex-col h-full xl:w-[50%] lg:w-[50%] sm:w-[100%] bg-blue px-8">
          <div className="h-auto flex flex-col justify-center items-center">
            <img src="/logo.png" alt="logo" />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Iniciar Sesion
            </h2>
          </div>
          <div className="w-[90%] h-auto">
            <form className="space-y-6" method="POST" onSubmit={handleSubmit}>
              <div>
                <Label htmlFor="email">Correo Electronico</Label>
                <Input id="email" name="email" type="email" autoComplete="email" required />
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Contraseña</Label>
                  <Link
                    to="/send_email_restore_password"
                    className="text-blue-600 font-bold text-[.8rem]"
                  >
                    Forgot Password
                  </Link>
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                />
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="confirmPassword">Confirmar Contraseña</Label>
                </div>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="current-password"
                  required
                />
              </div>
              <div>
                <Button
                  className="bg-blue-600 rounded w-full h-[2.8rem] text-white font-bold"
                  type="submit"
                >
                  Iniciar Sesion
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {userLogin.isError && <ModalErrors message={userLogin.error.message} title="Error" />}
    </div>
  )
}
