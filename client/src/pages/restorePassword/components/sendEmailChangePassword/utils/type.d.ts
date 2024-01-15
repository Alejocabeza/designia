export type SpecificHandles = {
  handleChangeEmail: ({ target }: ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void
}

export type MutationData = object
