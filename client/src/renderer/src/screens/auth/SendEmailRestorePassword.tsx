import { Button, Input, Label, ModalErrors } from '@renderer/components'
import { ModalSuccess } from '@renderer/components/modals/ModalSuccess'
import { useSendEmailRestorePassword } from '@renderer/screens/auth/hooks/useSendEmailRestorePassword'
import { Handles } from '@renderer/utils'
import { Link } from 'react-router-dom'
import imgAvif from '../../assets/pictures/buildingPicture.avif'
import imgJpg from '../../assets/pictures/buildingPicture.jpg'
import imgWebp from '../../assets/pictures/buildingPicture.webp'

export const SendEmailRestorePassword = (): JSX.Element => {
  const sendEmail = useSendEmailRestorePassword()
  const { handleSubmit } = Handles(sendEmail)

  return (
    <div className="h-screen flex flex-col w-screen justify-center items-center bg-gray-200">
      <div className="flex justify-between items-center flex-row w-[70%] sm:h-[80%] lg:h-[70%]  bg-[#fff] rounded-lg shadow-md overflow-hidden">
        <div className="flex justify-center items-center flex-col h-full w-[50%] sm:hidden xl:flex lg:flex">
          <picture className="w-full h-full">
            <source
              srcSet={imgAvif}
              type="image/avif"
              className="w-full h-full object-cover object-center"
            />
            <source
              srcSet={imgWebp}
              type="image/webp"
              className="w-full h-full object-cover object-center"
            />
            <img src={imgJpg} alt="building" className="w-full h-full object-cover object-center" />
          </picture>
        </div>
        <div className="flex justify-center items-center gap-4 sm:border-0 xl:border-l lg:border-l flex-col h-full xl:w-[50%] lg:w-[50%] sm:w-[100%] bg-blue">
          <div className="h-auto flex flex-col justify-center items-center">
            <img src="/logo.png" alt="logo" />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Restore Password
            </h2>
          </div>
          <div className="w-[70%] h-auto">
            <form className="space-y-6" method="POST" onSubmit={handleSubmit}>
              <div>
                <Label htmlFor="email">Correo Electronico</Label>
                <Input
                  placeholder="Email"
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                />
              </div>
              <div className="flex justify-center items-center w-full">
                <Button
                  className="bg-blue-600 rounded w-full h-[2.8rem] text-white font-bold"
                  type="submit"
                >
                  Send Email
                </Button>
              </div>
              <div>
                <Link to="/" className="text-blue-600 font-bold text-[.8rem]">
                  Sign In Now
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      {sendEmail.isSuccess && <ModalSuccess message={sendEmail.data?.message} title="Success" />}
      {sendEmail.isError && <ModalErrors message={sendEmail.error?.message} title="Error" />}
    </div>
  )
}
