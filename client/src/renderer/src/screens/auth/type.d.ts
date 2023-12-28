export type SignInMutationFn = MutationFunction<SignIn, object>
export type RestorePassword = {
  message: string
  code: number
}

export type SignIn = {
  id?: string | undefined
  name?: string | undefined
  DNI?: string | undefined
  email?: string | undefined
  avatar?: string | undefined
  active?: string | undefined
  roles?: string[] | []
  token?: string | undefined
}

export type Actions = {
  addUser: (user: SignIn) => void
  resetUser: () => void
}
