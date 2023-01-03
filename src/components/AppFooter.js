import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <span className="ms-1">Jérémy Escobar &copy; 2022 - 2023</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Using</span>
        <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer">
          Framework CoreUI
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
