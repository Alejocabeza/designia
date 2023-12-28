import { BuildingLibraryIcon, ShareIcon, TagIcon, UsersIcon } from '@heroicons/react/24/outline'

export const USER_ROLE_MAP_OPTION = [
  {
    key: 1,
    label: 'free',
    icon: <ShareIcon />
  },
  {
    key: 2,
    label: 'premium',
    icon: <TagIcon />
  },
  {
    key: 3,
    label: 'admin',
    icon: <BuildingLibraryIcon />
  },
  {
    key: 4,
    label: 'user',
    icon: <UsersIcon />
  }
]
