import { Button, Input, Label, Main } from '@renderer/components'

export const Home = (): JSX.Element => {
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
          <form className="space-y-6" action="#" method="POST">
            <div>
              <Label htmlFor="email">Correo Electronico</Label>
              <div className="mt-2">
                <Input id="email" name="email" type="email" autoComplete="email" required />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Contraseña</Label>
              </div>
              <div className="mt-2">
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                />
              </div>
            </div>
            <div>
              <Button type="submit">Iniciar Sesion</Button>
            </div>
          </form>
        </div>
      </div>
    </Main>
  )
}
