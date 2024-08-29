import React from 'react'
import {
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CForm,
  CFormLabel,
  CFormInput,
  CRow,
  CButton,
} from '@coreui/react'

const Settings = () => {
  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Settings</CCardHeader>
            <CCardBody>
              <CForm>
                <CRow className="mb-4">
                  <CCol md={6}>
                    <CFormLabel htmlFor="password"
                    style={{ fontSize: '1.75rem' }}
                    >Change Password</CFormLabel>
                    <CFormInput
                      type="password"
                      id="password"
                      placeholder="Enter new password"
                      className="mb-3"
                    />
                    <CFormInput
                      type="password"
                      id="confirmPassword"
                      placeholder="Confirm new password"
                      className="mb-4"
                    />
                    <CButton color="primary">Change Password</CButton>
                  </CCol>
                </CRow>

                <CRow className="mb-4">
                  <CCol md={6}>
                    <CFormLabel htmlFor="email"
                     style={{ fontSize: '1.75rem' }}
                     >Edit Account Details</CFormLabel>
                    <CFormLabel htmlFor="email" className="d-block mt-3">Email Address</CFormLabel>
                    <CFormInput
                      type="email"
                      id="email"
                      placeholder="Enter your email address"
                      className="mb-3"
                    />
                    <CFormLabel htmlFor="fullName" className="mt-3">Full Name</CFormLabel>
                    <CFormInput
                      type="text"
                      id="fullName"
                      placeholder="Enter your full name"
                      className="mb-4"
                    />
                    <CButton color="primary">Save Changes</CButton>
                  </CCol>
                </CRow>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Settings
