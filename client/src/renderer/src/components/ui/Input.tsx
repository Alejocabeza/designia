import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = (props: Props): JSX.Element => {
  const [eyeOpen, setEyeOpen] = useState(false)
  const handleShowPassword = (): void => {
    setEyeOpen(!eyeOpen)
    if (props.type === 'password') {
      const input = document.getElementById(props.id as string)
      if (eyeOpen === false) {
        input?.setAttribute('type', 'text')
      } else {
        input?.setAttribute('type', 'password')
      }
    }
  }
  return (
    <div className="mt-2 flex flex-row justify-between gap-2 relative">
      <input
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4"
        {...props}
      />
      {props.type === 'password' && eyeOpen === false && (
        <button
          onClick={() => handleShowPassword()}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
        >
          <EyeIcon className="text-black w-5 h-5" />
        </button>
      )}
      {props.type === 'password' && eyeOpen === true && (
        <button
          onClick={() => handleShowPassword()}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
        >
          <EyeSlashIcon className="text-black w-5 h-5" />
        </button>
      )}
    </div>
  )
}
