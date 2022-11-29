import React from 'react'
import { CCard, CCardBody, CCol, CCardHeader, CRow, CCallout } from '@coreui/react'
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
} from '@coreui/react-chartjs'

const Badges = () => {
  return (
    <CRow>
      <CCallout color="primary">
        But : sur 2022, être en dessous de 1h d arrêt involontaire.
      </CCallout>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Temps arrêt volontaire et involontaire sur 2022 en minutes</CCardHeader>
          <CCardBody>
            <CChartDoughnut
              data={{
                labels: ['Arret volontaire', 'Arret involontaire'],
                datasets: [
                  {
                    backgroundColor: ['#153767', '#36a9e1'],
                    data: [40, 30],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Nombre incident par type</CCardHeader>
          <CCardBody>
            <CChartDoughnut
              data={{
                labels: ['Matériel', 'Logiciel'],
                datasets: [
                  {
                    backgroundColor: ['#153767', '#36a9e1'],
                    data: [3, 14],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Badges
