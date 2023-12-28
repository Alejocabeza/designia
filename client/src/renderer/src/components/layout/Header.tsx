import { Avatar, AvatarBadge, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import {
  ArrowLeftEndOnRectangleIcon,
  BellIcon,
  LanguageIcon,
  MagnifyingGlassIcon,
  MoonIcon,
  UserIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline'
import { userStore } from '@renderer/screens/auth/store/userStore'
import { Link } from 'react-router-dom'

export const Header = (): JSX.Element => {
  const { active, name, resetUser } = userStore()
  return (
    <header className="flex flex-row justify-between items-center w-full h-[5rem] px-[4rem]">
      <div className="flex flex-row justify-start items-center gap-[1rem] capitalize text-lg font-semibold sm:w-[50%] lg:w-[30%] h-full">
        <div className="w-full h-full gap-4 rounded p-4 flex flex-row justify-start items-center">
          <button className="hover:bg-[#9ca3af40] rounded-full p-2 transition-colors duration-200">
            <MagnifyingGlassIcon className="w-6 h-6 text-black" />
          </button>
          <span className="text-gray-400 font-light">Search (Ctrl+/)</span>
        </div>
      </div>
      <div className="flex justify-end items-center flex-row gap-[.5rem] flex-1 h-full">
        <button className="hover:bg-[#9ca3af40] rounded-full p-2 transition-colors duration-200">
          <LanguageIcon className="w-6 h-6 text-black" />
        </button>
        <button className="hover:bg-[#9ca3af40] rounded-full p-2 transition-colors duration-200">
          <MoonIcon className="w-6 h-6 text-black" />
        </button>
        <button className="hover:bg-[#9ca3af40] rounded-full p-2 transition-colors duration-200">
          <BellIcon className="w-6 h-6 text-black" />
        </button>
        <Menu>
          <MenuButton className="cursor-pointer">
            <Avatar size="md" name={name}>
              <AvatarBadge boxSize="1.25em" bg={active ? 'green.500' : 'red.500'} />
            </Avatar>
          </MenuButton>
          <MenuList>
            <MenuItem as={Link} to="/profile" icon={<UserIcon className="w-5 h-5" />}>
              Profile
            </MenuItem>
            <MenuItem as={Link} to="/settings" icon={<WrenchScrewdriverIcon className="w-5 h-5" />}>
              Settings
            </MenuItem>
            <MenuItem
              as={Link}
              to="/"
              onClick={() => resetUser()}
              icon={<ArrowLeftEndOnRectangleIcon className="w-5 h-5" />}
            >
              Log Out
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </header>
  )
}
