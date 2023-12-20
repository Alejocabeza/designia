import { ArrowLeft } from '@renderer/icons/ArrowLeft'
import { Link } from 'react-router-dom'

export const Header = (): JSX.Element => {
  return (
    <header className="flex flex-row justify-between items-center w-full h-[4rem] px-2">
      <Link
        to={'..'}
        className="flex flex-row items-center gap-1 rounded p-2 text-[1rem] bg-blue-600 text-white rounded capitalize font-bold"
      >
        <ArrowLeft />
        atras
      </Link>
    </header>
  )
}
