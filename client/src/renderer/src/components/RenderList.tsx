import { ArrowDownTrayIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import { TooltipComponent } from './ui/Tooltip'
interface RenderListProps {
  title: string
  children: React.ReactNode
  setIsOpen: (value: boolean) => void
}
export const RenderList = (props: RenderListProps): JSX.Element => {
  return (
    <>
      <header className="flex justify-between items-center h-[5rem] bg-slate-900 w-full px-[2rem]">
        <div>
          <h1 className="text-[1.25rem] capitalize p-2 rounded px-4">
            Welcome to section {props.title}
          </h1>
        </div>
        <nav className="flex flex-row justify-center items-center h-full gap-4">
          <div>
            <TooltipComponent
              title={`Add New ${props.title}`}
              onClick={() => props.setIsOpen(true)}
            >
              <PlusCircleIcon className="w-6 h-6 text-white" />
            </TooltipComponent>
          </div>
          <div>
            <TooltipComponent
              title={`Downlaod ${props.title}`}
              onClick={() => console.log('download')}
            >
              <ArrowDownTrayIcon className="w-6 h-6 text-white" />
            </TooltipComponent>
          </div>
        </nav>
      </header>
      <main>{props.children}</main>
      <footer>footer</footer>
    </>
  )
}
