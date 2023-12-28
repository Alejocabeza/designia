import { Main } from './Main'
import { SideBar } from './Sidebar'

interface Props extends React.HTMLAttributes<HTMLElement> {
  width?: number
  height?: number
}

export const Layout = ({ children, ...props }: Props): JSX.Element => {
  return (
    <div className="flex flex-row  w-screen justify-between items-center h-screen bg-gray-100">
      <SideBar />
      <Main {...props}>{children}</Main>
    </div>
  )
}
