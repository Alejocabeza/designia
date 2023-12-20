import { UseMutationResult } from '@tanstack/react-query'
import { FormEvent } from 'react'

export const Handles = (query: UseMutationResult<void, Error, object, unknown>): any => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)
    query.mutate(data)
  }

  return { handleSubmit }
}
