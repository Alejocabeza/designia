import { useMutation } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { AXIOSAPI } from '../../../../../lib/axios'
import { ChangePasswordReponse } from '../type'

async function changePasswordFetch(data: object): Promise<ChangePasswordReponse | AxiosError> {
  try {
    const res: AxiosResponse<ChangePasswordReponse> = await AXIOSAPI.post(
      '/auth/change_password',
      data
    )
    return res.data
  } catch (error) {
    const axiosError = error as AxiosError
    throw axiosError?.response?.data
  }
}

export const useChangePassword = () => {
  return useMutation({
    mutationFn: changePasswordFetch
  })
}
