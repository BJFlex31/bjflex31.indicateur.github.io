import React from 'react'
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
} from '@coreui/react-chartjs'
import { DocsCallout } from 'src/components'

const CoreUIIcons = () => {
  return (
    <CRow>
      <CCol xs={13}>
        <CCard className="mb-4">
          <CCardHeader>Etat sauvegarde serveur</CCardHeader>
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
                    label: '1 : sauvegarde fonctionnel / 0 : sauvegarde corrompue',
                    backgroundColor: '#36a9e1',
                    data: [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0],
                  },
                ],
              }}
              labels="months"
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={13}>
        <CCard className="mb-4">
          <CCardHeader>Etat sauvegarde clipper</CCardHeader>
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
                    label: '1 : sauvegarde fonctionnel / 0 : sauvegarde corrompue',
                    backgroundColor: '#153767',
                    data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                  },
                ],
              }}
              labels="months"
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default CoreUIIcons
