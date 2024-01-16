import { useMutation } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { AXIOSAPI } from '../../../../../lib/axios'
import { validatePinResponse } from '../type'

async function validatePinFetch(data: object): Promise<validatePinResponse | AxiosError> {
  try {
    const res: AxiosResponse<validatePinResponse> = await AXIOSAPI.post('/auth/validate_pin', data)
    return res.data
  } catch (error) {
    const axiosError = error as AxiosError
    throw axiosError?.response?.data
  }
}

export const useValidatePin = () => {
  return useMutation({
    mutationFn: validatePinFetch
  })
}
