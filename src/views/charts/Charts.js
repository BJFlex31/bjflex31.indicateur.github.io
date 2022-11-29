import React from 'react'
import { CCard, CCardBody, CCol, CCardHeader, CRow, CAlert } from '@coreui/react'
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
      <CAlert color="danger">3 incidents qui ne seront pas résolus avant le changement ERP</CAlert>
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
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Nombre incident résolus et non résolus</CCardHeader>
          <CCardBody>
            <CChartDoughnut
              data={{
                labels: ['Résolus', 'Non résolus'],
                datasets: [
                  {
                    backgroundColor: ['#36a9e1', '#153767'],
                    data: [13, 3],
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
