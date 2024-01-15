export interface changePasswordInterface {
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
