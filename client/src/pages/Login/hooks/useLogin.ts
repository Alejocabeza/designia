import { useMutation } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { AXIOSAPI } from '../../../lib/axios'
import { SignIn } from '../type'

async function loginFetch(data: object): Promise<SignIn | AxiosError> {
  try {
    const res: AxiosResponse<SignIn> = await AXIOSAPI.post('/auth/login', data)
    return res.data
  } catch (error) {
    const axiosError = error as AxiosError
    throw axiosError?.response?.data
  }
}

export const useLoginUser = () => {
  return useMutation({
    mutationFn: loginFetch
  })
}
