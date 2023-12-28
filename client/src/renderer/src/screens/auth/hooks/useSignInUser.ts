import { AXIOSAPI } from '@renderer/axios'
import { SignIn } from '@renderer/screens/auth/type'
import { useMutation } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'

async function signInFetch(data: object): Promise<SignIn | AxiosError> {
  try {
    const res: AxiosResponse<SignIn> = await AXIOSAPI.post('api/auth/signin', data)
    return res.data
  } catch (error) {
    const axiosError = error as AxiosError
    throw axiosError?.response?.data
  }
}

export const useSignUser = () => {
  return useMutation({
    mutationFn: signInFetch
  })
}
