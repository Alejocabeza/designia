export type SpecificHandles = {
  handleChangePin: ({ target }: ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void
}

export type MutationData = object
