import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
} from '@coreui/react'

const Accordion = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Tâches en cours</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">Listes des tâches en cours de traitement</p>
            <CAccordion activeItemKey={2}>
              <CAccordionItem itemKey={1}>
                <CAccordionHeader>#1 Couleur carte département</CAccordionHeader>
                <CAccordionBody>
                  {
                    "Modifier la couleur d'un département sur la carte de la page contact. Le passer de couleur rouge  : http://bjflex.fr/index.php/contact/"
                  }
                </CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={2}>
                <CAccordionHeader>#2 Accéder Interface Retours Clients PDF &apos;</CAccordionHeader>
                <CAccordionBody>
                  {
                    "Heberger l'application sur GitHub Pages pour pouvoir y accéder depuis n'importe quel poste"
                  }
                </CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={3}>
                <CAccordionHeader>#3 Hausse des transporteurs</CAccordionHeader>
                <CAccordionBody>
                  {'Appliquer une hausse sur les 3 transporteurs principaux'}
                </CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={4}>
                <CAccordionHeader>#4 Fonctionnalité CRUD</CAccordionHeader>
                <CAccordionBody>
                  {
                    'Ajouter la fonctionnalité CRUD sur le dashboard afin de pouvoir via un compte admin modifier les valeurs sans aller écrire dans le code '
                  }
                </CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={5}>
                <CAccordionHeader>#5 Remplir indic décembre 2022</CAccordionHeader>
              </CAccordionItem>
            </CAccordion>
          </CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Tâches à faire</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">Listes des tâches en attente</p>
            <CAccordion activeItemKey={2}>
              <CAccordionItem itemKey={1}>
                <CAccordionHeader>Accordion Item #1</CAccordionHeader>
                <CAccordionBody>
                  <strong>This is the first item&#39;s accordion body.</strong> It is hidden by
                  default, until the collapse plugin adds the appropriate classes that we use to
                  style each element. These classes control the overall appearance, as well as the
                  showing and hiding via CSS transitions. You can modify any of this with custom CSS
                  or overriding our default variables. It&#39;s also worth noting that just about
                  any HTML can go within the <code>.accordion-body</code>, though the transition
                  does limit overflow.
                </CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={2}>
                <CAccordionHeader>Accordion Item #2</CAccordionHeader>
                <CAccordionBody>
                  <strong>This is the second item&#39;s accordion body.</strong> It is hidden by
                  default, until the collapse plugin adds the appropriate classes that we use to
                  style each element. These classes control the overall appearance, as well as the
                  showing and hiding via CSS transitions. You can modify any of this with custom CSS
                  or overriding our default variables. It&#39;s also worth noting that just about
                  any HTML can go within the <code>.accordion-body</code>, though the transition
                  does limit overflow.
                </CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={3}>
                <CAccordionHeader>Accordion Item #3</CAccordionHeader>
                <CAccordionBody>
                  <strong>This is the second item&#39;s accordion body.</strong> It is hidden by
                  default, until the collapse plugin adds the appropriate classes that we use to
                  style each element. These classes control the overall appearance, as well as the
                  showing and hiding via CSS transitions. You can modify any of this with custom CSS
                  or overriding our default variables. It&#39;s also worth noting that just about
                  any HTML can go within the <code>.accordion-body</code>, though the transition
                  does limit overflow.
                </CAccordionBody>
              </CAccordionItem>
            </CAccordion>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Accordion
