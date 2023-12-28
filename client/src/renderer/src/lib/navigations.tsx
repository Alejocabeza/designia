import {
  BriefcaseIcon,
  BuildingOfficeIcon,
  HomeIcon,
  MapPinIcon,
  RectangleStackIcon,
  UserPlusIcon
} from '@heroicons/react/24/outline'

export const NAVIGATION_SIDEBAR_LINKS = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    path: '/dashboard',
    icon: <HomeIcon className="w-6 h-6 text-black" />
  },
  {
    key: 'clients',
    label: 'Clients',
    path: '/clients',
    icon: <UserPlusIcon className="w-6 h-6 text-black" />
  },
  {
    key: 'projects',
    label: 'Projects',
    path: '/projects',
    icon: <BriefcaseIcon className="w-6 h-6 text-black" />
  },
  {
    key: 'client_offices',
    label: 'Client Office',
    path: '/client_office',
    icon: <BuildingOfficeIcon className="w-6 h-6 text-black" />
  },
  {
    key: 'tasks',
    label: 'Task',
    path: '/task',
    icon: <RectangleStackIcon className="w-6 h-6 text-black" />
  },
  {
    key: 'address',
    label: 'Address',
    path: '/address',
    icon: <MapPinIcon className="w-6 h-6 text-black" />
  }
]
