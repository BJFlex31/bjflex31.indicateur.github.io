import React, { useState } from 'react'
import {
  CNavItem,
  CNavLink,
  CNav,
  CTabContent,
  CTabPane,
  CCard,
  CCardBody,
  CCol,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

const Navs = () => {
  const [activeKey, setActiveKey] = useState(1)
  return (
    <>
      <CNav variant="tabs" role="tablist">
        <CNavItem>
          <CNavLink
            href="javascript:void(0);"
            active={activeKey === 1}
            onClick={() => setActiveKey(1)}
          >
            Bureau T
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink
            href="javascript:void(0);"
            active={activeKey === 2}
            onClick={() => setActiveKey(2)}
          >
            Bureau P
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink
            href="javascript:void(0);"
            active={activeKey === 3}
            onClick={() => setActiveKey(3)}
          >
            Atelier
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink
            href="javascript:void(0);"
            active={activeKey === 4}
            onClick={() => setActiveKey(4)}
          >
            Itinérant
          </CNavLink>
        </CNavItem>
      </CNav>
      <CTabContent>
        <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 1}>
          <CCol xs={12}>
            <CCard className="mb-4">
              <CCardBody>
                <CTable>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell scope="col">#</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Pièce</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Nom - Prenom</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Type</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Etat</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Date mise en route</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    <CTableRow>
                      <CTableHeaderCell scope="row">1</CTableHeaderCell>
                      <CTableDataCell>Informatique</CTableDataCell>
                      <CTableDataCell>Jérémy E</CTableDataCell>
                      <CTableDataCell>Portable</CTableDataCell>
                      <CTableDataCell>Très bon état</CTableDataCell>
                      <CTableDataCell>Décembre 2021</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">2</CTableHeaderCell>
                      <CTableDataCell>Commercial</CTableDataCell>
                      <CTableDataCell>Serge Q</CTableDataCell>
                      <CTableDataCell>Portable + écran</CTableDataCell>
                      <CTableDataCell>Très bon état</CTableDataCell>
                      <CTableDataCell>2022</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">3</CTableHeaderCell>
                      <CTableDataCell>Commercial</CTableDataCell>
                      <CTableDataCell>Franck G</CTableDataCell>
                      <CTableDataCell>Portable + écran</CTableDataCell>
                      <CTableDataCell>Ok</CTableDataCell>
                      <CTableDataCell>N/A</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">4</CTableHeaderCell>
                      <CTableDataCell>Commercial</CTableDataCell>
                      <CTableDataCell>Eric D</CTableDataCell>
                      <CTableDataCell>Fixe + écran</CTableDataCell>
                      <CTableDataCell>Ok</CTableDataCell>
                      <CTableDataCell>N/A</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">5</CTableHeaderCell>
                      <CTableDataCell>Commercial</CTableDataCell>
                      <CTableDataCell>Marie HB</CTableDataCell>
                      <CTableDataCell>Portable + écran</CTableDataCell>
                      <CTableDataCell>Ok</CTableDataCell>
                      <CTableDataCell>2021</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">6</CTableHeaderCell>
                      <CTableDataCell>Commercial</CTableDataCell>
                      <CTableDataCell>Honorine</CTableDataCell>
                      <CTableDataCell>Portable + écran</CTableDataCell>
                      <CTableDataCell>Très bon état</CTableDataCell>
                      <CTableDataCell>2021</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">7</CTableHeaderCell>
                      <CTableDataCell>Facturation</CTableDataCell>
                      <CTableDataCell>Claire S</CTableDataCell>
                      <CTableDataCell>Portable + écran</CTableDataCell>
                      <CTableDataCell>Très bon état</CTableDataCell>
                      <CTableDataCell>2022</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">8</CTableHeaderCell>
                      <CTableDataCell>Directeur</CTableDataCell>
                      <CTableDataCell>Didier J</CTableDataCell>
                      <CTableDataCell>Tablette + écran</CTableDataCell>
                      <CTableDataCell>Ok</CTableDataCell>
                      <CTableDataCell>N/A</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">9</CTableHeaderCell>
                      <CTableDataCell>Achat</CTableDataCell>
                      <CTableDataCell>Vincent M</CTableDataCell>
                      <CTableDataCell>Fixe + 2 écrans</CTableDataCell>
                      <CTableDataCell>REMPLACEMENT EN COURS</CTableDataCell>
                      <CTableDataCell>N/A</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">10</CTableHeaderCell>
                      <CTableDataCell>Achat</CTableDataCell>
                      <CTableDataCell>Noélie</CTableDataCell>
                      <CTableDataCell>Portable + écran</CTableDataCell>
                      <CTableDataCell>Très bon état</CTableDataCell>
                      <CTableDataCell>2021</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">11</CTableHeaderCell>
                      <CTableDataCell>Achat</CTableDataCell>
                      <CTableDataCell>Elisabeth R</CTableDataCell>
                      <CTableDataCell>Fixe / portable + 2 écrans</CTableDataCell>
                      <CTableDataCell>Fixe : à remplacer / portable : très bon état</CTableDataCell>
                      <CTableDataCell>fixe : N/A / portable : 2021</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">12</CTableHeaderCell>
                      <CTableDataCell>Compta</CTableDataCell>
                      <CTableDataCell>Sandrine S</CTableDataCell>
                      <CTableDataCell>Portable + écran</CTableDataCell>
                      <CTableDataCell>Très bon état</CTableDataCell>
                      <CTableDataCell>2021</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">13</CTableHeaderCell>
                      <CTableDataCell>Compta</CTableDataCell>
                      <CTableDataCell>Sylvie L</CTableDataCell>
                      <CTableDataCell>Portable + écran</CTableDataCell>
                      <CTableDataCell>Très bon état</CTableDataCell>
                      <CTableDataCell>2021</CTableDataCell>
                    </CTableRow>
                  </CTableBody>
                </CTable>
              </CCardBody>
            </CCard>
          </CCol>
        </CTabPane>
        <CTabPane role="tabpanel" aria-labelledby="profile-tab" visible={activeKey === 2}>
          <CCol xs={12}>
            <CCard className="mb-4">
              <CCardBody>
                <CTable>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell scope="col">#</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Pièce</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Nom - Prenom</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Type</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Etat</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Date mise en route</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    <CTableRow>
                      <CTableHeaderCell scope="row">1</CTableHeaderCell>
                      <CTableDataCell>Commercial</CTableDataCell>
                      <CTableDataCell>Christine</CTableDataCell>
                      <CTableDataCell>Portable</CTableDataCell>
                      <CTableDataCell>Très bon état</CTableDataCell>
                      <CTableDataCell>2021</CTableDataCell>
                    </CTableRow>
                  </CTableBody>
                </CTable>
              </CCardBody>
            </CCard>
          </CCol>
        </CTabPane>
        <CTabPane role="tabpanel" aria-labelledby="profile-tab" visible={activeKey === 3}>
          <CCol xs={12}>
            <CCard className="mb-4">
              <CCardBody>
                <CTable>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell scope="col">#</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Pièce</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Nom - Prenom</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Type</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Etat</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Date mise en route</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    <CTableRow>
                      <CTableHeaderCell scope="row">1</CTableHeaderCell>
                      <CTableDataCell>BE</CTableDataCell>
                      <CTableDataCell>Eric M</CTableDataCell>
                      <CTableDataCell>Portable + écran</CTableDataCell>
                      <CTableDataCell>Très bon état</CTableDataCell>
                      <CTableDataCell>Re-paramétrage imprimante etiq</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">2</CTableHeaderCell>
                      <CTableDataCell>BE</CTableDataCell>
                      <CTableDataCell>Donald T</CTableDataCell>
                      <CTableDataCell>Fixe + écran</CTableDataCell>
                      <CTableDataCell>Ok</CTableDataCell>
                      <CTableDataCell>N/A</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">3</CTableHeaderCell>
                      <CTableDataCell>BE</CTableDataCell>
                      <CTableDataCell>Kader B</CTableDataCell>
                      <CTableDataCell>Fixe + écran</CTableDataCell>
                      <CTableDataCell>Ok</CTableDataCell>
                      <CTableDataCell>N/A</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">4</CTableHeaderCell>
                      <CTableDataCell>BE</CTableDataCell>
                      <CTableDataCell>Ancien Daniel</CTableDataCell>
                      <CTableDataCell>Fixe + écran</CTableDataCell>
                      <CTableDataCell>Ok</CTableDataCell>
                      <CTableDataCell>N/A</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">5</CTableHeaderCell>
                      <CTableDataCell>MAG</CTableDataCell>
                      <CTableDataCell>Mag 1</CTableDataCell>
                      <CTableDataCell>Fixe + écran</CTableDataCell>
                      <CTableDataCell>Ok</CTableDataCell>
                      <CTableDataCell>N/A</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">6</CTableHeaderCell>
                      <CTableDataCell>MAG</CTableDataCell>
                      <CTableDataCell>MAG 2 Jean</CTableDataCell>
                      <CTableDataCell>Fixe + écran</CTableDataCell>
                      <CTableDataCell>Remplacement en cours</CTableDataCell>
                      <CTableDataCell>N/A</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">7</CTableHeaderCell>
                      <CTableDataCell>Pointeuse</CTableDataCell>
                      <CTableDataCell>all</CTableDataCell>
                      <CTableDataCell>Fixe + écran</CTableDataCell>
                      <CTableDataCell>Ok</CTableDataCell>
                      <CTableDataCell>N/A</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">8</CTableHeaderCell>
                      <CTableDataCell>Soudure</CTableDataCell>
                      <CTableDataCell>Kader 2</CTableDataCell>
                      <CTableDataCell>Fixe + écran</CTableDataCell>
                      <CTableDataCell>Ok</CTableDataCell>
                      <CTableDataCell>N/A</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">9</CTableHeaderCell>
                      <CTableDataCell>Fléxible</CTableDataCell>
                      <CTableDataCell>all</CTableDataCell>
                      <CTableDataCell>Fixe + écran</CTableDataCell>
                      <CTableDataCell>Ok</CTableDataCell>
                      <CTableDataCell>N/A</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">10</CTableHeaderCell>
                      <CTableDataCell>Tuyaux</CTableDataCell>
                      <CTableDataCell>Majid 1 ancien</CTableDataCell>
                      <CTableDataCell>Fixe + écran</CTableDataCell>
                      <CTableDataCell>Ok</CTableDataCell>
                      <CTableDataCell>N/A</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">11</CTableHeaderCell>
                      <CTableDataCell>Tuyaux</CTableDataCell>
                      <CTableDataCell>Majid 2</CTableDataCell>
                      <CTableDataCell>Fixe + écran</CTableDataCell>
                      <CTableDataCell>Ok</CTableDataCell>
                      <CTableDataCell>N/A</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">12</CTableHeaderCell>
                      <CTableDataCell>Tuyaux</CTableDataCell>
                      <CTableDataCell>Stéphane N</CTableDataCell>
                      <CTableDataCell>Fixe + écran</CTableDataCell>
                      <CTableDataCell>Ok</CTableDataCell>
                      <CTableDataCell>N/A</CTableDataCell>
                    </CTableRow>
                  </CTableBody>
                </CTable>
              </CCardBody>
            </CCard>
          </CCol>
        </CTabPane>
        <CTabPane role="tabpanel" aria-labelledby="profile-tab" visible={activeKey === 4}>
          <CCol xs={12}>
            <CCard className="mb-4">
              <CCardBody>
                <CTable>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell scope="col">#</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Pièce</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Nom - Prenom</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Type</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Etat</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Date mise en route</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    <CTableRow>
                      <CTableHeaderCell scope="row">1</CTableHeaderCell>
                      <CTableDataCell>Commercial</CTableDataCell>
                      <CTableDataCell>Gregory P</CTableDataCell>
                      <CTableDataCell>Portable</CTableDataCell>
                      <CTableDataCell>Très bon état</CTableDataCell>
                      <CTableDataCell>2022</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">2</CTableHeaderCell>
                      <CTableDataCell>Commercial</CTableDataCell>
                      <CTableDataCell>Mathieu C</CTableDataCell>
                      <CTableDataCell>Portable</CTableDataCell>
                      <CTableDataCell>a remplacer</CTableDataCell>
                      <CTableDataCell>N/A</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">3</CTableHeaderCell>
                      <CTableDataCell>Commercial</CTableDataCell>
                      <CTableDataCell>Stephan B</CTableDataCell>
                      <CTableDataCell>Portable</CTableDataCell>
                      <CTableDataCell>Ok</CTableDataCell>
                      <CTableDataCell>N/A</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">4</CTableHeaderCell>
                      <CTableDataCell>Commercial</CTableDataCell>
                      <CTableDataCell>Ronan B</CTableDataCell>
                      <CTableDataCell>Portable</CTableDataCell>
                      <CTableDataCell>Ok</CTableDataCell>
                      <CTableDataCell>N/A</CTableDataCell>
                    </CTableRow>
                  </CTableBody>
                </CTable>
              </CCardBody>
            </CCard>
          </CCol>
        </CTabPane>
      </CTabContent>
    </>
  )
}

export default Navs
