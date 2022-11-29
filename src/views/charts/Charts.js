import React from 'react'
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
} from '@coreui/react-chartjs'
import { DocsCallout } from 'src/components'

const Charts = () => {
  const random = () => Math.round(Math.random() * 100)

  return (
    <CRow>
      <CCol xs={13}>
        <CCard className="mb-4">
          <CCardHeader>Nombre incident par mois en 2022</CCardHeader>
          <CCardBody>
            <CChartBar
              data={{
                labels: [
                  'Janvier',
                  'Février',
                  'Mars',
                  'Avril',
                  'Mai',
                  'Juin',
                  'Juillet',
                  'Août',
                  'Septembre',
                  'Octobre',
                  'Novembre',
                  'Décembre',
                ],
                datasets: [
                  {
                    label: 'Tickets par mois',
                    backgroundColor: '#36a9e1',
                    data: [1, 2, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0],
                  },
                ],
              }}
              labels="months"
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
                    backgroundColor: ['#457825', '#36a9e1'],
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
export default Charts
