export interface SendEmailDataInterface {
  email: {
    value: string
    error: boolean | null
    required: boolean
    messageError: string
    messageSuccess: string
  }
}
