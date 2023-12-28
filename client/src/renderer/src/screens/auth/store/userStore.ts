import { Actions, SignIn } from '@renderer/screens/auth/type'
import { create } from 'zustand'

export const userStore = create<SignIn & Actions>((set) => ({
  id: undefined,
  name: undefined,
  DNI: undefined,
  email: undefined,
  avatar: undefined,
  active: undefined,
  roles: [],
  addUser: (user: SignIn): void => set(() => ({ ...user })),
  resetUser: (): void =>
    set(() => ({
      id: undefined,
      name: undefined,
      DNI: undefined,
      email: undefined,
      avatar: undefined,
      active: undefined,
      roles: []
    }))
}))
