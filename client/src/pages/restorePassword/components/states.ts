export const initialStateSendEmail = {
  email: {
    value: '',
    error: null,
    required: true,
    messageError: 'This field is required',
    messageSuccess: 'Email sent successfully!'
  }
}

export const initialStatePin = {
  pin: {
    value: '',
    error: null,
    required: true,
    messageError: 'This field is required',
    messageSuccess: 'Pin sent successfully!'
  }
}

export const initialChangePassword = {
  password: {
    value: '',
    error: null,
    required: true,
    messageError: 'This field is required',
    messageSuccess: 'Password changed successfully!'
  },
  confirmPassword: {
    value: '',
    error: null,
    required: true,
    messageError: 'This field is required',
    messageSuccess: 'Password changed successfully!'
  }
}
