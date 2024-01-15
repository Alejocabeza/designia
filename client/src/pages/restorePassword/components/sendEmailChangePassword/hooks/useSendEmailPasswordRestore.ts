import { useMutation } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { SendEmailResponse } from '../type'
import { AXIOSAPI } from '../../../../../lib/axios'

async function sendEmailFetch(data: object): Promise<SendEmailResponse | AxiosError> {
  try {
    const res: AxiosResponse<SendEmailResponse> = await AXIOSAPI.post(
      '/auth/send_email_restore_password',
      data
    )
    return res.data
  } catch (error) {
    const axiosError = error as AxiosError
    throw axiosError?.response?.data
  }
}

export const useSendEmailRestorePassword = () => {
  return useMutation({
    mutationFn: sendEmailFetch
  })
}
