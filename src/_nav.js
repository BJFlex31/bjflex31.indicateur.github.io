import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Indicateurs 2022',
  },
  {
    component: CNavGroup,
    name: 'Tickets',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Global',
        to: '/charts',
      },
      {
        component: CNavItem,
        name: 'Historique tickets',
        to: '/base/tables',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Sauvegardes',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Global',
        to: '/icons/flags',
      },
      {
        component: CNavItem,
        name: 'Tableaux',
        to: '/widgets',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Haute disponibilité',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Global',
        to: '/notifications/badges',
      },
      {
        component: CNavItem,
        name: 'Historique des temps',
        to: '/theme/typography',
      },
    ],
  },
]

export default _nav
