import { UseMutationResult } from '@tanstack/react-query'
import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from 'react'
import { MutationData, SpecificHandles } from './type'
import { SendEmailDataInterface } from '../interface'

export const specificHandles = (
  _formValues: SendEmailDataInterface,
  setFormValues: Dispatch<SetStateAction<SendEmailDataInterface>>,
  query: UseMutationResult
): SpecificHandles => {
  const validateEmail = (type: string, value: string): boolean =>
    !(type === 'email' && !/\S+@\S+\.\S+/.test(value))

  function handleChangeEmail({ target }: ChangeEvent<HTMLInputElement>): void {
    setFormValues((prevFormValues: SendEmailDataInterface) => {
      const { name = '', value = '', type = '' } = target
      const validEmail = validateEmail(type, value)
      const newFormValues = {
        ...prevFormValues,
        [name]: {
          value,
          error: !value || !validEmail
        }
      }
      return newFormValues
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data: MutationData = Object.fromEntries(formData)
    query.mutate(data)
  }

  return {
    handleChangeEmail,
    handleSubmit
  }
}
