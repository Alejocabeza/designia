import { NAVIGATION_SIDEBAR_LINKS } from '@renderer/lib/navigations'
import { Link } from 'react-router-dom'

export const SideBar = (): JSX.Element => {
  return (
    <aside className="sm:w-[10%] lg:w-[12%] h-full flex flex-col gap-[2rem] sm:justify-start lg:justify-between items-start">
      <div className="w-full sm:justify-start lg:justify-between sm:gap-[1rem] lg:gap-[.5rem] items-start flex-1 sm:pb-0 lg:pb-[2rem] sm:relative sm:py-[1rem] lg:py-[2rem] px-4">
        <div className="flex flex-col gap-[1rem] sm:h-[50%] lg:h-[60%]">
          <div className="flex flex-row gap-[0rem] justify-start items-center">
            <span className="w-full text-start capitalize text-gray-500 text-[.8rem] sm:hidden lg:block">
              Main Menu
            </span>
            <hr className="w-[40%] bg-gray-400 h-[.2rem] rounded" />
          </div>
          <div>
            {NAVIGATION_SIDEBAR_LINKS.map((link) => (
              <Link
                to={link.path}
                key={link.key}
                className="text-black flex flex-row justify-start items-center gap-[1rem] w-full h-[2rem] transition-colors duration-150 hover:bg-gray-300 hover:rounded p-4 py-[1.8rem]"
              >
                {link.icon}
                <span className="sm:hidden lg:block">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}
