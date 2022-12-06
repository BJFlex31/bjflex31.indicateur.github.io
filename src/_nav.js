import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilSpeedometer, cilStar, cilClipboard, cilPaperPlane } from '@coreui/icons'
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
    name: 'Panel Informatique',
  },
  {
    component: CNavGroup,
    name: 'Gestions matériels',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Ordinateurs',
        to: '/charts',
        badge: {
          color: 'info',
          text: 'PC',
        },
      },
      {
        component: CNavItem,
        name: 'Imprimantes',
        to: '/base/tables',
        badge: {
          color: 'danger',
          text: 'IMPRIM',
        },
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Projets',
    icon: <CIcon icon={cilClipboard} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Terminés',
        to: '/charts',
        badge: {
          color: 'success',
          text: 'FAITS',
        },
      },
      {
        component: CNavItem,
        name: 'En cours',
        to: '/base/tables',
        badge: {
          color: 'danger',
          text: 'DEV',
        },
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Indicateurs 2022',
  },
  {
    component: CNavGroup,
    name: 'Tickets',
    icon: <CIcon icon={cilPaperPlane} customClassName="nav-icon" />,
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
  {
    component: CNavTitle,
    name: 'Indicateurs 2023',
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
