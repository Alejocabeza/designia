import { UseMutationResult } from '@tanstack/react-query'
import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from 'react'
import { LoginDataInterface } from '../interface'
import { MutationData, SpecificHandles } from './type'

export const specificHandles = (
  _formValues: LoginDataInterface,
  setFormValues: Dispatch<SetStateAction<LoginDataInterface>>,
  query: UseMutationResult
): SpecificHandles => {
  const regexPassword = /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/

  const validatePasssowd = (value: string): boolean => regexPassword.test(value)

  const handleChangePassword = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    setFormValues((prevFormValues: LoginDataInterface) => {
      const { name = '', value = '' } = target
      const isValid = validatePasssowd(value)
      const newFormValues = {
        ...prevFormValues,
        [name]: {
          value,
          error: !isValid
        }
      }
      return newFormValues
    })
  }

  const validateEmail = (type: string, value: string): boolean =>
    !(type === 'email' && !/\S+@\S+\.\S+/.test(value))

  function handleChangeEmail({ target }: ChangeEvent<HTMLInputElement>): void {
    setFormValues((prevFormValues: LoginDataInterface) => {
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
    handleChangePassword,
    handleChangeEmail,
    handleSubmit
  }
}
