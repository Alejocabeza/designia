import { UseMutationResult } from '@tanstack/react-query'
import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from 'react'
import { changePasswordInterface } from '../interface'
import { MutationData, SpecificHandles } from './type'

export const specificHandles = (
  _formValues: changePasswordInterface,
  setFormValues: Dispatch<SetStateAction<changePasswordInterface>>,
  query: UseMutationResult
): SpecificHandles => {
  const regexPassword = /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/

  const validatePasssowd = (value: string): boolean => regexPassword.test(value)

  const handleChangePassword = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    setFormValues((prevFormValues: changePasswordInterface) => {
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

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data: MutationData = Object.fromEntries(formData)
    query.mutate(data)
  }

  return {
    handleChangePassword,
    handleSubmit
  }
}
