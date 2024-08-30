import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Leaderboard = React.lazy(() => import('./views/Leaderboard/Leaderboard'))
const Settings = React.lazy(() => import('./views/settings/Settings'))
const Navs = React.lazy(() => import('./views/base/navs/Navs'))

const Level1Project1 = React.lazy(() => import('./views/level1/calculator'))
const Level2Project1 = React.lazy(() => import('./views/level2/guessnum'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/Leaderboard', name: 'Leaderboard', element: Leaderboard },
  { path: '/settings', name: 'Settings', element: Settings},  
  { path: '/base/navs', name: 'Navs', element: Navs },
  { path: '/level1', name: 'Level 1 Project 1', element: Level1Project1 },
  { path: '/level2', name: 'Level 2 Project 1', element: Level2Project1 },
  { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', element: Flags },
  { path: '/icons/brands', name: 'Brands', element: Brands },
  { path: '/widgets', name: 'Widgets', element: Widgets },
]

export default routes
