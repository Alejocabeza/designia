import { AXIOSAPI } from '@renderer/axios'
import { RestorePassword } from '@renderer/screens/auth/type'
import { UseMutationResult, useMutation } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'

const sendEmailRestorePasswordFetch = async (
  data: object
): Promise<RestorePassword | AxiosError> => {
  try {
    const res: AxiosResponse<RestorePassword> = await AXIOSAPI.post(
      'api/auth/restore-password',
      data
    )
    return res.data
  } catch (error) {
    const axiosError = error as AxiosError
    throw axiosError?.response?.data
  }
}

export const useSendEmailRestorePassword = (): UseMutationResult => {
  return useMutation({
    mutationFn: sendEmailRestorePasswordFetch
  })
}
