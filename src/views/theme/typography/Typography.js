import React from 'react'
import { CRow, CCol } from '@coreui/react'
import { DocsExample } from 'src/components'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

const Typography = () => {
  return (
    <>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>DécemTemps disponibilité serveur</strong>
            </CCardHeader>
            <CCardBody>
              <DocsExample href="components/table">
                <CTable>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell scope="col">#</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Arret volontaire</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Arret non-volontaire</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    <CTableRow>
                      <CTableHeaderCell scope="row">1</CTableHeaderCell>
                      <CTableDataCell>01/12/22</CTableDataCell>
                      <CTableDataCell></CTableDataCell>
                      <CTableDataCell></CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">2</CTableHeaderCell>
                      <CTableDataCell>02/12/22</CTableDataCell>
                      <CTableDataCell></CTableDataCell>
                      <CTableDataCell></CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">3</CTableHeaderCell>
                      <CTableDataCell>05/12/22</CTableDataCell>
                      <CTableDataCell></CTableDataCell>
                      <CTableDataCell></CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">4</CTableHeaderCell>
                      <CTableDataCell>06/12/22</CTableDataCell>
                      <CTableDataCell></CTableDataCell>
                      <CTableDataCell></CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">5</CTableHeaderCell>
                      <CTableDataCell>07/12/22</CTableDataCell>
                      <CTableDataCell></CTableDataCell>
                      <CTableDataCell></CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">6</CTableHeaderCell>
                      <CTableDataCell>08/12/22</CTableDataCell>
                      <CTableDataCell></CTableDataCell>
                      <CTableDataCell></CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">7</CTableHeaderCell>
                      <CTableDataCell>09/12/22</CTableDataCell>
                      <CTableDataCell></CTableDataCell>
                      <CTableDataCell></CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">8</CTableHeaderCell>
                      <CTableDataCell>12/12/22</CTableDataCell>
                      <CTableDataCell></CTableDataCell>
                      <CTableDataCell></CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">9</CTableHeaderCell>
                      <CTableDataCell>13/12/22</CTableDataCell>
                      <CTableDataCell></CTableDataCell>
                      <CTableDataCell></CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">10</CTableHeaderCell>
                      <CTableDataCell>14/12/22</CTableDataCell>
                      <CTableDataCell></CTableDataCell>
                      <CTableDataCell></CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">11</CTableHeaderCell>
                      <CTableDataCell>15/12/22</CTableDataCell>
                      <CTableDataCell></CTableDataCell>
                      <CTableDataCell></CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">12</CTableHeaderCell>
                      <CTableDataCell>16/12/22</CTableDataCell>
                      <CTableDataCell></CTableDataCell>
                      <CTableDataCell></CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">13</CTableHeaderCell>
                      <CTableDataCell>19/12/22</CTableDataCell>
                      <CTableDataCell></CTableDataCell>
                      <CTableDataCell></CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">14</CTableHeaderCell>
                      <CTableDataCell>20/12/22</CTableDataCell>
                      <CTableDataCell></CTableDataCell>
                      <CTableDataCell></CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">15</CTableHeaderCell>
                      <CTableDataCell>21/12/22</CTableDataCell>
                      <CTableDataCell></CTableDataCell>
                      <CTableDataCell></CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">16</CTableHeaderCell>
                      <CTableDataCell>22/12/22</CTableDataCell>
                      <CTableDataCell></CTableDataCell>
                      <CTableDataCell></CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">17</CTableHeaderCell>
                      <CTableDataCell>23/12/22</CTableDataCell>
                      <CTableDataCell></CTableDataCell>
                      <CTableDataCell></CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">18</CTableHeaderCell>
                      <CTableDataCell>26/12/22</CTableDataCell>
                      <CTableDataCell></CTableDataCell>
                      <CTableDataCell></CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">19</CTableHeaderCell>
                      <CTableDataCell>27/12/22</CTableDataCell>
                      <CTableDataCell></CTableDataCell>
                      <CTableDataCell></CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">20</CTableHeaderCell>
                      <CTableDataCell>28/12/22</CTableDataCell>
                      <CTableDataCell></CTableDataCell>
                      <CTableDataCell></CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">21</CTableHeaderCell>
                      <CTableDataCell>29/12/22</CTableDataCell>
                      <CTableDataCell></CTableDataCell>
                      <CTableDataCell></CTableDataCell>
                    </CTableRow>
                  </CTableBody>
                </CTable>
              </DocsExample>
            </CCardBody>
          </CCard>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>NovemTemps disponibilité serveur</strong>
            </CCardHeader>
            <CCardBody>
              <DocsExample href="components/table">
                <CTable>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell scope="col">#</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Arret volontaire</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Arret non-volontaire</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    <CTableRow>
                      <CTableHeaderCell scope="row">1</CTableHeaderCell>
                      <CTableDataCell>01/11/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">2</CTableHeaderCell>
                      <CTableDataCell>02/11/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">3</CTableHeaderCell>
                      <CTableDataCell>03/11/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">4</CTableHeaderCell>
                      <CTableDataCell>04/11/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">5</CTableHeaderCell>
                      <CTableDataCell>07/11/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">6</CTableHeaderCell>
                      <CTableDataCell>08/11/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">7</CTableHeaderCell>
                      <CTableDataCell>09/11/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">8</CTableHeaderCell>
                      <CTableDataCell>10/11/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">9</CTableHeaderCell>
                      <CTableDataCell>11/11/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">10</CTableHeaderCell>
                      <CTableDataCell>14/11/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">11</CTableHeaderCell>
                      <CTableDataCell>15/11/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">12</CTableHeaderCell>
                      <CTableDataCell>16/11/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">13</CTableHeaderCell>
                      <CTableDataCell>17/11/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">14</CTableHeaderCell>
                      <CTableDataCell>18/11/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">15</CTableHeaderCell>
                      <CTableDataCell>21/11/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">16</CTableHeaderCell>
                      <CTableDataCell>22/11/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">17</CTableHeaderCell>
                      <CTableDataCell>23/11/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">18</CTableHeaderCell>
                      <CTableDataCell>24/11/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">19</CTableHeaderCell>
                      <CTableDataCell>25/11/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">20</CTableHeaderCell>
                      <CTableDataCell>28/11/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">21</CTableHeaderCell>
                      <CTableDataCell>29/11/22</CTableDataCell>
                      <CTableDataCell></CTableDataCell>
                      <CTableDataCell></CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">22</CTableHeaderCell>
                      <CTableDataCell>30/11/22</CTableDataCell>
                      <CTableDataCell></CTableDataCell>
                      <CTableDataCell></CTableDataCell>
                    </CTableRow>
                  </CTableBody>
                </CTable>
              </DocsExample>
            </CCardBody>
          </CCard>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>OctTemps disponibilité serveur</strong>
            </CCardHeader>
            <CCardBody>
              <DocsExample href="components/table">
                <CTable>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell scope="col">#</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Arret volontaire</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Arret non-volontaire</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    <CTableRow>
                      <CTableHeaderCell scope="row">1</CTableHeaderCell>
                      <CTableDataCell>03/10/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">2</CTableHeaderCell>
                      <CTableDataCell>04/10/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">3</CTableHeaderCell>
                      <CTableDataCell>05/10/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">4</CTableHeaderCell>
                      <CTableDataCell>06/10/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">5</CTableHeaderCell>
                      <CTableDataCell>07/10/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">6</CTableHeaderCell>
                      <CTableDataCell>10/10/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">7</CTableHeaderCell>
                      <CTableDataCell>11/10/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">8</CTableHeaderCell>
                      <CTableDataCell>12/10/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">9</CTableHeaderCell>
                      <CTableDataCell>13/10/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">10</CTableHeaderCell>
                      <CTableDataCell>14/10/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">11</CTableHeaderCell>
                      <CTableDataCell>17/10/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>5 min</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">12</CTableHeaderCell>
                      <CTableDataCell>18/10/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">13</CTableHeaderCell>
                      <CTableDataCell>19/10/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">14</CTableHeaderCell>
                      <CTableDataCell>20/10/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">15</CTableHeaderCell>
                      <CTableDataCell>21/10/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">16</CTableHeaderCell>
                      <CTableDataCell>24/10/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">17</CTableHeaderCell>
                      <CTableDataCell>25/10/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">18</CTableHeaderCell>
                      <CTableDataCell>26/10/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">19</CTableHeaderCell>
                      <CTableDataCell>27/10/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">20</CTableHeaderCell>
                      <CTableDataCell>28/10/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">21</CTableHeaderCell>
                      <CTableDataCell>31/10/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                  </CTableBody>
                </CTable>
              </DocsExample>
            </CCardBody>
          </CCard>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>SepteTemps disponibilité serveur</strong>
            </CCardHeader>
            <CCardBody>
              <DocsExample href="components/table">
                <CTable>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell scope="col">#</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Arret volontaire</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Arret non-volontaire</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    <CTableRow>
                      <CTableHeaderCell scope="row">1</CTableHeaderCell>
                      <CTableDataCell>01/09/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">2</CTableHeaderCell>
                      <CTableDataCell>02/09/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">3</CTableHeaderCell>
                      <CTableDataCell>05/09/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">4</CTableHeaderCell>
                      <CTableDataCell>06/09/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">5</CTableHeaderCell>
                      <CTableDataCell>07/09/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">6</CTableHeaderCell>
                      <CTableDataCell>08/09/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">7</CTableHeaderCell>
                      <CTableDataCell>09/09/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">8</CTableHeaderCell>
                      <CTableDataCell>12/09/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">9</CTableHeaderCell>
                      <CTableDataCell>13/09/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">10</CTableHeaderCell>
                      <CTableDataCell>14/09/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">11</CTableHeaderCell>
                      <CTableDataCell>15/09/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">12</CTableHeaderCell>
                      <CTableDataCell>16/09/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">13</CTableHeaderCell>
                      <CTableDataCell>19/09/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">14</CTableHeaderCell>
                      <CTableDataCell>20/09/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">15</CTableHeaderCell>
                      <CTableDataCell>21/09/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">16</CTableHeaderCell>
                      <CTableDataCell>22/09/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">17</CTableHeaderCell>
                      <CTableDataCell>23/09/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">18</CTableHeaderCell>
                      <CTableDataCell>26/09/22</CTableDataCell>
                      <CTableDataCell>5 min</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">19</CTableHeaderCell>
                      <CTableDataCell>27/09/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">20</CTableHeaderCell>
                      <CTableDataCell>28/09/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">21</CTableHeaderCell>
                      <CTableDataCell>29/09/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                  </CTableBody>
                </CTable>
              </DocsExample>
            </CCardBody>
          </CCard>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Temps disponibilité serveur</strong>
            </CCardHeader>
            <CCardBody>
              <DocsExample href="components/table">
                <CTable>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Arret volontaire</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Arret non-volontaire</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    <CTableRow>
                      <CTableHeaderCell scope="row">1</CTableHeaderCell>
                      <CTableDataCell>01/08/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">2</CTableHeaderCell>
                      <CTableDataCell>02/08/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">3</CTableHeaderCell>
                      <CTableDataCell>03/08/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">4</CTableHeaderCell>
                      <CTableDataCell>04/08/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">5</CTableHeaderCell>
                      <CTableDataCell>05/08/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">6</CTableHeaderCell>
                      <CTableDataCell>08/08/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">7</CTableHeaderCell>
                      <CTableDataCell>09/08/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">8</CTableHeaderCell>
                      <CTableDataCell>10/08/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">9</CTableHeaderCell>
                      <CTableDataCell>11/08/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">10</CTableHeaderCell>
                      <CTableDataCell>12/08/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">11</CTableHeaderCell>
                      <CTableDataCell>15/08/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">12</CTableHeaderCell>
                      <CTableDataCell>16/08/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">13</CTableHeaderCell>
                      <CTableDataCell>17/08/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">14</CTableHeaderCell>
                      <CTableDataCell>18/08/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">15</CTableHeaderCell>
                      <CTableDataCell>19/08/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">16</CTableHeaderCell>
                      <CTableDataCell>22/08/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">17</CTableHeaderCell>
                      <CTableDataCell>23/08/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">18</CTableHeaderCell>
                      <CTableDataCell>24/08/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">19</CTableHeaderCell>
                      <CTableDataCell>25/08/22</CTableDataCell>
                      <CTableDataCell>5 min</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">20</CTableHeaderCell>
                      <CTableDataCell>26/08/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">21</CTableHeaderCell>
                      <CTableDataCell>29/08/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">22</CTableHeaderCell>
                      <CTableDataCell>30/08/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">23</CTableHeaderCell>
                      <CTableDataCell>31/08/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                  </CTableBody>
                </CTable>
              </DocsExample>
            </CCardBody>
          </CCard>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>JuiTemps disponibilité serveur</strong>
            </CCardHeader>
            <CCardBody>
              <DocsExample href="components/table">
                <CTable>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell scope="col">#</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Arret volontaire</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Arret non-volontaire</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    <CTableRow>
                      <CTableHeaderCell scope="row">1</CTableHeaderCell>
                      <CTableDataCell>01/07/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">2</CTableHeaderCell>
                      <CTableDataCell>04/07/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">3</CTableHeaderCell>
                      <CTableDataCell>05/07/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">4</CTableHeaderCell>
                      <CTableDataCell>06/07/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">5</CTableHeaderCell>
                      <CTableDataCell>07/07/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">6</CTableHeaderCell>
                      <CTableDataCell>08/07/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">7</CTableHeaderCell>
                      <CTableDataCell>11/07/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">8</CTableHeaderCell>
                      <CTableDataCell>12/07/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">9</CTableHeaderCell>
                      <CTableDataCell>13/07/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">10</CTableHeaderCell>
                      <CTableDataCell>14/07/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">11</CTableHeaderCell>
                      <CTableDataCell>15/07/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">12</CTableHeaderCell>
                      <CTableDataCell>18/07/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">13</CTableHeaderCell>
                      <CTableDataCell>19/07/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">14</CTableHeaderCell>
                      <CTableDataCell>20/07/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">15</CTableHeaderCell>
                      <CTableDataCell>21/07/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">16</CTableHeaderCell>
                      <CTableDataCell>22/07/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">17</CTableHeaderCell>
                      <CTableDataCell>25/07/22</CTableDataCell>
                      <CTableDataCell>5 min</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">18</CTableHeaderCell>
                      <CTableDataCell>26/07/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">19</CTableHeaderCell>
                      <CTableDataCell>27/07/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">20</CTableHeaderCell>
                      <CTableDataCell>28/07/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">21</CTableHeaderCell>
                      <CTableDataCell>29/07/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                  </CTableBody>
                </CTable>
              </DocsExample>
            </CCardBody>
          </CCard>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Temps disponibilité serveur</strong>
            </CCardHeader>
            <CCardBody>
              <DocsExample href="components/table">
                <CTable>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell scope="col">#</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Arret volontaire</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Arret non-volontaire</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    <CTableRow>
                      <CTableHeaderCell scope="row">1</CTableHeaderCell>
                      <CTableDataCell>01/06/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">2</CTableHeaderCell>
                      <CTableDataCell>02/06/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">3</CTableHeaderCell>
                      <CTableDataCell>03/06/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">3</CTableHeaderCell>
                      <CTableDataCell>06/06/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">4</CTableHeaderCell>
                      <CTableDataCell>07/06/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">5</CTableHeaderCell>
                      <CTableDataCell>07/06/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">6</CTableHeaderCell>
                      <CTableDataCell>08/06/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">7</CTableHeaderCell>
                      <CTableDataCell>09/06/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">8</CTableHeaderCell>
                      <CTableDataCell>10/06/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">9</CTableHeaderCell>
                      <CTableDataCell>13/06/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">10</CTableHeaderCell>
                      <CTableDataCell>14/06/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">11</CTableHeaderCell>
                      <CTableDataCell>15/06/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">12</CTableHeaderCell>
                      <CTableDataCell>16/06/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">13</CTableHeaderCell>
                      <CTableDataCell>17/06/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">14</CTableHeaderCell>
                      <CTableDataCell>20/06/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">15</CTableHeaderCell>
                      <CTableDataCell>21/06/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">16</CTableHeaderCell>
                      <CTableDataCell>22/06/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">17</CTableHeaderCell>
                      <CTableDataCell>23/06/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">18</CTableHeaderCell>
                      <CTableDataCell>24/06/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">19</CTableHeaderCell>
                      <CTableDataCell>27/06/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">20</CTableHeaderCell>
                      <CTableDataCell>28/06/22</CTableDataCell>
                      <CTableDataCell>5 min</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">21</CTableHeaderCell>
                      <CTableDataCell>29/06/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">22</CTableHeaderCell>
                      <CTableDataCell>30/06/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                  </CTableBody>
                </CTable>
              </DocsExample>
            </CCardBody>
          </CCard>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Temps disponibilité serveur</strong>
            </CCardHeader>
            <CCardBody>
              <DocsExample href="components/table">
                <CTable>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell scope="col">#</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Arret volontaire</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Arret non-volontaire</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    <CTableRow>
                      <CTableHeaderCell scope="row">1</CTableHeaderCell>
                      <CTableDataCell>03/01/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">2</CTableHeaderCell>
                      <CTableDataCell>02/05/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">3</CTableHeaderCell>
                      <CTableDataCell>03/05/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">4</CTableHeaderCell>
                      <CTableDataCell>04/05/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">5</CTableHeaderCell>
                      <CTableDataCell>05/05/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">6</CTableHeaderCell>
                      <CTableDataCell>06/05/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">7</CTableHeaderCell>
                      <CTableDataCell>09/05/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">8</CTableHeaderCell>
                      <CTableDataCell>10/05/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">9</CTableHeaderCell>
                      <CTableDataCell>11/05/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">10</CTableHeaderCell>
                      <CTableDataCell>12/05/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">11</CTableHeaderCell>
                      <CTableDataCell>13/05/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">12</CTableHeaderCell>
                      <CTableDataCell>16/05/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">13</CTableHeaderCell>
                      <CTableDataCell>17/05/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">14</CTableHeaderCell>
                      <CTableDataCell>18/05/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">15</CTableHeaderCell>
                      <CTableDataCell>19/05/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">16</CTableHeaderCell>
                      <CTableDataCell>20/05/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">17</CTableHeaderCell>
                      <CTableDataCell>23/05/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">18</CTableHeaderCell>
                      <CTableDataCell>24/05/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">19</CTableHeaderCell>
                      <CTableDataCell>25/05/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">20</CTableHeaderCell>
                      <CTableDataCell>26/05/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">21</CTableHeaderCell>
                      <CTableDataCell>27/05/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">22</CTableHeaderCell>
                      <CTableDataCell>30/05/22</CTableDataCell>
                      <CTableDataCell>10 min</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">23</CTableHeaderCell>
                      <CTableDataCell>31/05/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                  </CTableBody>
                </CTable>
              </DocsExample>
            </CCardBody>
          </CCard>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>ATemps disponibilité serveur</strong>
            </CCardHeader>
            <CCardBody>
              <DocsExample href="components/table">
                <CTable>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell scope="col">#</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Arret volontaire</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Arret non-volontaire</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    <CTableRow>
                      <CTableHeaderCell scope="row">1</CTableHeaderCell>
                      <CTableDataCell>01/04/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">2</CTableHeaderCell>
                      <CTableDataCell>04/04/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">3</CTableHeaderCell>
                      <CTableDataCell>05/04/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">4</CTableHeaderCell>
                      <CTableDataCell>06/04/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">5</CTableHeaderCell>
                      <CTableDataCell>07/04/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">6</CTableHeaderCell>
                      <CTableDataCell>11/04/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">7</CTableHeaderCell>
                      <CTableDataCell>12/04/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">8</CTableHeaderCell>
                      <CTableDataCell>13/04/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">9</CTableHeaderCell>
                      <CTableDataCell>14/04/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">10</CTableHeaderCell>
                      <CTableDataCell>15/04/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">11</CTableHeaderCell>
                      <CTableDataCell>18/04/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">12</CTableHeaderCell>
                      <CTableDataCell>19/04/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">13</CTableHeaderCell>
                      <CTableDataCell>20/04/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">14</CTableHeaderCell>
                      <CTableDataCell>21/04/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">15</CTableHeaderCell>
                      <CTableDataCell>22/04/22</CTableDataCell>
                      <CTableDataCell>5 min</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                  </CTableBody>
                </CTable>
              </DocsExample>
            </CCardBody>
          </CCard>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Temps disponibilité serveur</strong>
            </CCardHeader>
            <CCardBody>
              <DocsExample href="components/table">
                <CTable>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell scope="col">#</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Arret volontaire</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Arret non-volontaire</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    <CTableRow>
                      <CTableHeaderCell scope="row">1</CTableHeaderCell>
                      <CTableDataCell>01/03/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">2</CTableHeaderCell>
                      <CTableDataCell>02/03/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">3</CTableHeaderCell>
                      <CTableDataCell>03/03/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">4</CTableHeaderCell>
                      <CTableDataCell>04/03/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">5</CTableHeaderCell>
                      <CTableDataCell>07/03/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">6</CTableHeaderCell>
                      <CTableDataCell>08/03/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">7</CTableHeaderCell>
                      <CTableDataCell>09/03/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">8</CTableHeaderCell>
                      <CTableDataCell>10/03/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">9</CTableHeaderCell>
                      <CTableDataCell>11/03/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">10</CTableHeaderCell>
                      <CTableDataCell>14/03/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">11</CTableHeaderCell>
                      <CTableDataCell>15/03/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">12</CTableHeaderCell>
                      <CTableDataCell>16/03/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">13</CTableHeaderCell>
                      <CTableDataCell>17/03/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">14</CTableHeaderCell>
                      <CTableDataCell>18/03/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">15</CTableHeaderCell>
                      <CTableDataCell>21/03/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>10 min</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">16</CTableHeaderCell>
                      <CTableDataCell>22/03/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">17</CTableHeaderCell>
                      <CTableDataCell>23/03/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">18</CTableHeaderCell>
                      <CTableDataCell>24/03/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">19</CTableHeaderCell>
                      <CTableDataCell>25/03/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">20</CTableHeaderCell>
                      <CTableDataCell>28/03/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                  </CTableBody>
                </CTable>
              </DocsExample>
            </CCardBody>
          </CCard>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>FévTemps disponibilité serveur</strong>
            </CCardHeader>
            <CCardBody>
              <DocsExample href="components/table">
                <CTable>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell scope="col">#</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Arret volontaire</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Arret non-volontaire</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    <CTableRow>
                      <CTableHeaderCell scope="row">1</CTableHeaderCell>
                      <CTableDataCell>01/02/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">2</CTableHeaderCell>
                      <CTableDataCell>02/02/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">3</CTableHeaderCell>
                      <CTableDataCell>03/02/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">4</CTableHeaderCell>
                      <CTableDataCell>04/02/22</CTableDataCell>
                      <CTableDataCell>5 min</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">5</CTableHeaderCell>
                      <CTableDataCell>07/02/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">6</CTableHeaderCell>
                      <CTableDataCell>08/02/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">7</CTableHeaderCell>
                      <CTableDataCell>09/02/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">8</CTableHeaderCell>
                      <CTableDataCell>10/02/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">9</CTableHeaderCell>
                      <CTableDataCell>11/02/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">10</CTableHeaderCell>
                      <CTableDataCell>14/02/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">11</CTableHeaderCell>
                      <CTableDataCell>15/02/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">12</CTableHeaderCell>
                      <CTableDataCell>16/02/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">13</CTableHeaderCell>
                      <CTableDataCell>17/02/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">14</CTableHeaderCell>
                      <CTableDataCell>18/02/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">15</CTableHeaderCell>
                      <CTableDataCell>21/02/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">16</CTableHeaderCell>
                      <CTableDataCell>22/02/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">17</CTableHeaderCell>
                      <CTableDataCell>23/02/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">18</CTableHeaderCell>
                      <CTableDataCell>24/02/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">19</CTableHeaderCell>
                      <CTableDataCell>25/02/22</CTableDataCell>
                      <CTableDataCell>10 min</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">20</CTableHeaderCell>
                      <CTableDataCell>28/02/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                  </CTableBody>
                </CTable>
              </DocsExample>
            </CCardBody>
          </CCard>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Janvier 2022 : Historiques des sauvegardes BDD + Clipper</strong>
            </CCardHeader>
            <CCardBody>
              <DocsExample href="components/table">
                <CTable>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell scope="col">#</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Arret volontaire</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Arret non-volontaire</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    <CTableRow>
                      <CTableHeaderCell scope="row">1</CTableHeaderCell>
                      <CTableDataCell>03/01/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">2</CTableHeaderCell>
                      <CTableDataCell>04/01/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">3</CTableHeaderCell>
                      <CTableDataCell>05/01/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">4</CTableHeaderCell>
                      <CTableDataCell>06/01/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">5</CTableHeaderCell>
                      <CTableDataCell>07/01/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">6</CTableHeaderCell>
                      <CTableDataCell>10/01/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">7</CTableHeaderCell>
                      <CTableDataCell>11/01/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">8</CTableHeaderCell>
                      <CTableDataCell>12/01/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">9</CTableHeaderCell>
                      <CTableDataCell>13/01/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">10</CTableHeaderCell>
                      <CTableDataCell>14/01/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">11</CTableHeaderCell>
                      <CTableDataCell>17/01/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">12</CTableHeaderCell>
                      <CTableDataCell>18/01/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">13</CTableHeaderCell>
                      <CTableDataCell>19/01/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">14</CTableHeaderCell>
                      <CTableDataCell>20/01/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">15</CTableHeaderCell>
                      <CTableDataCell>21/01/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">16</CTableHeaderCell>
                      <CTableDataCell>24/01/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">17</CTableHeaderCell>
                      <CTableDataCell>25/01/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">18</CTableHeaderCell>
                      <CTableDataCell>26/01/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">19</CTableHeaderCell>
                      <CTableDataCell>27/01/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">20</CTableHeaderCell>
                      <CTableDataCell>28/01/22</CTableDataCell>
                      <CTableDataCell>5 min</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">21</CTableHeaderCell>
                      <CTableDataCell>31/01/22</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                      <CTableDataCell>1</CTableDataCell>
                    </CTableRow>
                  </CTableBody>
                </CTable>
              </DocsExample>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Typography
