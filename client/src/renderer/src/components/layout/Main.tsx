import { Header } from './Header'

interface Props extends React.HTMLAttributes<HTMLElement> {}

export const Main = ({ children, ...props }: Props): JSX.Element => {
  return (
    <div className="flex flex-col flex-1 justify-start items-start h-full" {...props}>
      <Header />
      <main className="flex justify-center items-center h-full w-full px-[4rem] py-4">
        <section className="flex flex-col justify-between items-center h-full w-full rounded-md overflow-hidden">
          {children}
        </section>
      </main>
    </div>
  )
}
