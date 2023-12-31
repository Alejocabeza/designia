import { ChangeEvent } from 'react'

export const Handles = (formValues, setFormValues) => {
  const validateEmail = (type: string, value: string): boolean =>
    !(type === 'email' && !/\S+@\S+\.\S+/.test(value))
  function handleChangeEmail({ target }: ChangeEvent<HTMLInputElement>): void {
    setFormValues((prevFormValues: Record<string, string>) => {
      const { name = '', value = '', type = '' } = target
      const validEmail = validateEmail(type, value)
      const newFormValues = {
        ...prevFormValues,
        [name]: {
          ...(typeof prevFormValues[name] === 'object' ? prevFormValues[name] : {}),
          value,
          error: !value || !validEmail
        }
      }
      return newFormValues
    })
  }
  return {
    handleChangeEmail
  }
}
