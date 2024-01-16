export interface validatePinInterface {
  pin: {
    value: string
    error: boolean | null
    required: boolean
    messageError: string
    messageSuccess: string
  }
}
