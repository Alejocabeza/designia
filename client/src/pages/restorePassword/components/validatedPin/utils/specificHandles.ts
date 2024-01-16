import { UseMutationResult } from '@tanstack/react-query'
import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from 'react'
import { validatePinInterface } from '../interface'
import { MutationData, SpecificHandles } from './type'

export const specificHandles = (
  _formValues: validatePinInterface,
  setFormValues: Dispatch<SetStateAction<validatePinInterface>>,
  query: UseMutationResult
): SpecificHandles => {
  const handleChangePin = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    setFormValues((prevFormValues: validatePinInterface) => {
      const { name = '', value = '' } = target
      const newFormValues = {
        ...prevFormValues,
        [name]: {
          value,
          error: !value
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
    handleChangePin,
    handleSubmit
  }
}
