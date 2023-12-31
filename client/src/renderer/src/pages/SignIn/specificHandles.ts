import { ChangeEvent } from 'react'

export const specificHandles = (formValues, setFormValues) => {
  const regexPassword = /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/

  const validatePasssowd = (value: string): boolean => regexPassword.test(value)

  const handleChangePassword = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    setFormValues((prevFormValues: Record<string, number>) => {
      const { name = '', value = '' } = target
      const isValid = validatePasssowd(value)
      const newFormValues = {
        ...prevFormValues,
        [name]: {
          ...(typeof prevFormValues[name] === 'object' ? prevFormValues[name] : {}),
          value,
          error: !isValid
        }
      }
      return newFormValues
    })
  }

  return {
    handleChangePassword
  }
}
