import { singIn } from '@renderer/axios'
import { Button, Input, Label, Main, ModalErrors } from '@renderer/components'
import { Handles } from '@renderer/utils'
import { useMutation } from '@tanstack/react-query'
import { Navigate } from 'react-router-dom'

export const Login = (): JSX.Element => {
  const userLogin = useMutation({
    mutationFn: singIn
  })

  const { handleSubmit } = Handles(userLogin)

  if (userLogin.isSuccess) return <Navigate to="/dashboard" />

  console.log(userLogin.error)

  return (
    <Main className="h-screen flex flex-col w-screen justify-center items-center">
      <div className="flex justify-center items-center gap-4 flex-col h-[70%] w-[45%] bg-[#cccccc60] rounded-xl shadow-md px-4">
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
              <Button type="submit" disabled={userLogin.isPending}>
                Iniciar Sesion
              </Button>
            </div>
          </form>
        </div>
      </div>
      {userLogin.isError && (
        <ModalErrors message={userLogin.error.response?.data.message} title="Error" />
      )}
    </Main>
  )
}
