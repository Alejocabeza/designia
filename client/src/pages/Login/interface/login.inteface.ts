export interface LoginDataInterface {
  email: {
    value: string
    error: boolean | null
    required: boolean
    messageError: string
    messageSuccess: string
  }
  password: {
    value: string
    error: boolean | null
    required: boolean
    messageError: string
    messageSuccess: string
  }
  confirmPassword: {
    value: string
    error: boolean | null
    required: boolean
    messageError: string
    messageSuccess: string
  }
}
