import { AXIOSAPI } from './constans'

export const singIn = async (data: object): Promise<void> => {
  const res = await AXIOSAPI.post('api/auth/signin', data)
  return res.data
}
