export type SpecificHandles = {
  handleChangePassword: ({ target }: ChangeEvent<HTMLInputElement>) => void
  handleChangeEmail: ({ target }: ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void
}

export type MutationData = object
