import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'

const Tables = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Historique des tickets ouverts / fermés (2021+2022)</strong>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="components/table">
              <CTable>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Nom - Prenom</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Niveau Incident</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Type Incident</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Description</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Etat</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>18/11/22</CTableDataCell>
                    <CTableDataCell>Thibaud</CTableDataCell>
                    <CTableDataCell>Haut</CTableDataCell>
                    <CTableDataCell>Logiciel</CTableDataCell>
                    <CTableDataCell>Re-paramétrage imprimante etiq</CTableDataCell>
                    <CTableDataCell>Résolu</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">2</CTableHeaderCell>
                    <CTableDataCell>22/04/22</CTableDataCell>
                    <CTableDataCell>Eric M</CTableDataCell>
                    <CTableDataCell>Bloquant</CTableDataCell>
                    <CTableDataCell>Logiciel</CTableDataCell>
                    <CTableDataCell>Besoin mdp admin MAJ clip</CTableDataCell>
                    <CTableDataCell>Résolu</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">3</CTableHeaderCell>
                    <CTableDataCell>03/22</CTableDataCell>
                    <CTableDataCell>Marie HF</CTableDataCell>
                    <CTableDataCell>Moyen</CTableDataCell>
                    <CTableDataCell>Matériel</CTableDataCell>
                    <CTableDataCell>Problème scan code-barre</CTableDataCell>
                    <CTableDataCell>Résolu</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">4</CTableHeaderCell>
                    <CTableDataCell>02/22</CTableDataCell>
                    <CTableDataCell>Eric M</CTableDataCell>
                    <CTableDataCell>Bloquant</CTableDataCell>
                    <CTableDataCell>Logiciel</CTableDataCell>
                    <CTableDataCell>Solidworks non activé</CTableDataCell>
                    <CTableDataCell>Résolu</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">5</CTableHeaderCell>
                    <CTableDataCell>02/22</CTableDataCell>
                    <CTableDataCell>Majid</CTableDataCell>
                    <CTableDataCell>Bloquant</CTableDataCell>
                    <CTableDataCell>Logiciel</CTableDataCell>
                    <CTableDataCell>Outlook ne fonctionne pas</CTableDataCell>
                    <CTableDataCell>Résolu</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">6</CTableHeaderCell>
                    <CTableDataCell>01/22</CTableDataCell>
                    <CTableDataCell>Eric M</CTableDataCell>
                    <CTableDataCell>Bloquant</CTableDataCell>
                    <CTableDataCell>Logiciel</CTableDataCell>
                    <CTableDataCell>Clipper : spé remplacement ref down</CTableDataCell>
                    <CTableDataCell>Résolu</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">7</CTableHeaderCell>
                    <CTableDataCell>12/21</CTableDataCell>
                    <CTableDataCell>Thibaud</CTableDataCell>
                    <CTableDataCell>Bloquant</CTableDataCell>
                    <CTableDataCell>Logiciel</CTableDataCell>
                    <CTableDataCell>Clipper : pb RECH_BC_AFF</CTableDataCell>
                    <CTableDataCell>Non Résolu</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">8</CTableHeaderCell>
                    <CTableDataCell>12/21</CTableDataCell>
                    <CTableDataCell>Thibaud</CTableDataCell>
                    <CTableDataCell>Bloquant</CTableDataCell>
                    <CTableDataCell>Logiciel</CTableDataCell>
                    <CTableDataCell>Clipper : pb RECH_BC_AFF</CTableDataCell>
                    <CTableDataCell>Non Résolu</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">9</CTableHeaderCell>
                    <CTableDataCell>11/21</CTableDataCell>
                    <CTableDataCell>Estelle P</CTableDataCell>
                    <CTableDataCell>Bloquant</CTableDataCell>
                    <CTableDataCell>Logiciel</CTableDataCell>
                    <CTableDataCell>Clipper : connexion impossible</CTableDataCell>
                    <CTableDataCell>Résolu</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">10</CTableHeaderCell>
                    <CTableDataCell>11/21</CTableDataCell>
                    <CTableDataCell>Marie HF</CTableDataCell>
                    <CTableDataCell>Bloquant</CTableDataCell>
                    <CTableDataCell>Matériel</CTableDataCell>
                    <CTableDataCell>Scanette ne fonctionne plus</CTableDataCell>
                    <CTableDataCell>Résolu</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">11</CTableHeaderCell>
                    <CTableDataCell>09/21</CTableDataCell>
                    <CTableDataCell>Eric M</CTableDataCell>
                    <CTableDataCell>Bas</CTableDataCell>
                    <CTableDataCell>Matériel</CTableDataCell>
                    <CTableDataCell>connexion imposs impr gest prod</CTableDataCell>
                    <CTableDataCell>Résolu</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">12</CTableHeaderCell>
                    <CTableDataCell>09/21</CTableDataCell>
                    <CTableDataCell>Stéphane N</CTableDataCell>
                    <CTableDataCell>Bloquant</CTableDataCell>
                    <CTableDataCell>Logiciel</CTableDataCell>
                    <CTableDataCell>Clipper: connexion impossible</CTableDataCell>
                    <CTableDataCell>Résolu</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">13</CTableHeaderCell>
                    <CTableDataCell>09/21</CTableDataCell>
                    <CTableDataCell>Majid</CTableDataCell>
                    <CTableDataCell>Bloquant</CTableDataCell>
                    <CTableDataCell>Logiciel</CTableDataCell>
                    <CTableDataCell>Clipper: impression impossible</CTableDataCell>
                    <CTableDataCell>Non Résolu</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">14</CTableHeaderCell>
                    <CTableDataCell>08/21</CTableDataCell>
                    <CTableDataCell>Daniel</CTableDataCell>
                    <CTableDataCell>Bloquant</CTableDataCell>
                    <CTableDataCell>Logiciel</CTableDataCell>
                    <CTableDataCell>Outlook : connexion impossible</CTableDataCell>
                    <CTableDataCell>Résolu</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">15</CTableHeaderCell>
                    <CTableDataCell>08/21</CTableDataCell>
                    <CTableDataCell>Jean</CTableDataCell>
                    <CTableDataCell>Bloquant</CTableDataCell>
                    <CTableDataCell>Logiciel</CTableDataCell>
                    <CTableDataCell>Clipper : impression auto étiq</CTableDataCell>
                    <CTableDataCell>Non Résolu</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">16</CTableHeaderCell>
                    <CTableDataCell>08/21</CTableDataCell>
                    <CTableDataCell>Kader B</CTableDataCell>
                    <CTableDataCell>Moyen</CTableDataCell>
                    <CTableDataCell>Logiciel</CTableDataCell>
                    <CTableDataCell>Modification mdp outlook</CTableDataCell>
                    <CTableDataCell>Résolu</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">16</CTableHeaderCell>
                    <CTableDataCell>08/21</CTableDataCell>
                    <CTableDataCell>Kader B</CTableDataCell>
                    <CTableDataCell>Moyen</CTableDataCell>
                    <CTableDataCell>Logiciel</CTableDataCell>
                    <CTableDataCell>connexion outlook</CTableDataCell>
                    <CTableDataCell>Résolu</CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Tables
