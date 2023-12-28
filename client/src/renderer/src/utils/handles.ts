import { FormEvent } from 'react'
import { HandleSubmit, MutationData } from './type'

export const Handles = (query): { handleSubmit: HandleSubmit } => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data: MutationData = Object.fromEntries(formData)
    query.mutate(data)
  }

  return { handleSubmit }
}
