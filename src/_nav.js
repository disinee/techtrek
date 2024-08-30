import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilStar ,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Leaderboard',
    to: '/Leaderboard',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  },
]

export default _nav
