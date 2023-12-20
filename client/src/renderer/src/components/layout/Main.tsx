import { Footer } from './Footer'
import { Header } from './Header'

interface Props extends React.HTMLAttributes<HTMLElement> {}

export const Main = ({ children, ...props }: Props): JSX.Element => {
  const pathname = window.location.pathname
  return (
    <>
      {pathname !== '/' && <Header />}
      <main {...props}>{children}</main>
      {/* {pathname !== '/' && <Footer />} */}
    </>
  )
}
