// import React from 'react'
// import { Link } from 'react-router-dom'
// import {
//   CButton,
//   CCard,
//   CCardBody,
//   CCardGroup,
//   CCol,
//   CContainer,
//   CForm,
//   CFormInput,
//   CInputGroup,
//   CInputGroupText,
//   CRow,
// } from '@coreui/react'
// import CIcon from '@coreui/icons-react'
// import { cilLockLocked, cilUser } from '@coreui/icons'

// const Login = () => {
//   return (
//     <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
//       <CContainer>
//         <CRow className="justify-content-center">
//           <CCol md={8}>
//             <CCardGroup>
//               <CCard className="p-4">
//                 <CCardBody>
//                   <CForm>
//                     <h1>Login</h1>
//                     <p className="text-body-secondary">Sign In to your account</p>
//                     <CInputGroup className="mb-3">
//                       <CInputGroupText>
//                         <CIcon icon={cilUser} />
//                       </CInputGroupText>
//                       <CFormInput placeholder="Username" autoComplete="username" />
//                     </CInputGroup>
//                     <CInputGroup className="mb-4">
//                       <CInputGroupText>
//                         <CIcon icon={cilLockLocked} />
//                       </CInputGroupText>
//                       <CFormInput
//                         type="password"
//                         placeholder="Password"
//                         autoComplete="current-password"
//                       />
//                     </CInputGroup>
//                     <CRow>
//                       <CCol xs={6}>
//                         <CButton color="primary" className="px-4">
//                           Login
//                         </CButton>
//                       </CCol>
//                       <CCol xs={6} className="text-right">
//                         <CButton color="link" className="px-0">
//                           Forgot password?
//                         </CButton>
//                       </CCol>
//                     </CRow>
//                   </CForm>
//                 </CCardBody>
//               </CCard>
//               <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
//                 <CCardBody className="text-center">
//                   <div>
//                     <h2>Sign up</h2>
//                     <p>
//                       Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
//                       tempor incididunt ut labore et dolore magna aliqua.
//                     </p>
//                     <Link to="/register">
//                       <CButton color="primary" className="mt-3" active tabIndex={-1}>
//                         Register Now!
//                       </CButton>
//                     </Link>
//                   </div>
//                 </CCardBody>
//               </CCard>
//             </CCardGroup>
//           </CCol>
//         </CRow>
//       </CContainer>
//     </div>
//   )
// }

// export default Login

import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CImage,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser, cilEnvelopeOpen } from '@coreui/icons'

// Import your logo and illustration here
import logo from 'src/views/pages/login/techtrek_logo.jpg'
import illustration from 'src/views/pages/login/side_image.png'

const Login = () => {
  return (
    <div className="min-vh-100 d-flex">
      {/* Left side: Illustration */}
      <CCol md={6} className="d-none d-md-flex bg-light align-items-center justify-content-center">
        <CImage src={illustration} fluid className="p-5" alt="Illustration" />
      </CCol>

      {/* Right side: Login Form */}
      <CCol md={6} className="d-flex align-items-center">
        <CContainer>
          <div className="d-flex justify-content-center mb-4">
            <CImage src={logo} height={90} alt="Company Logo" />
          </div>
          <CCard className="p-4 shadow-sm">
            <CCardBody>
              <h2 className="text-center mb-4">Welcome Back</h2>
              <p className="text-center text-muted mb-4">
                To keep connected with us please login with your personal information by email address and password 🔒
              </p>
              <CForm>
                <CInputGroup className="mb-3">
                  <CInputGroupText>
                    <CIcon icon={cilEnvelopeOpen} />
                  </CInputGroupText>
                  <CFormInput placeholder="Email Address" autoComplete="email" />
                </CInputGroup>
                <CInputGroup className="mb-3">
                  <CInputGroupText>
                    <CIcon icon={cilLockLocked} />
                  </CInputGroupText>
                  <CFormInput
                    type="password"
                    placeholder="Password"
                    autoComplete="current-password"
                  />
                </CInputGroup>
                <CRow>
                  <CCol xs={12}>
                    <Link to="/dashboard">
                      <CButton color="primary" className="px-4">
                        Login Now
                      </CButton>
                    </Link>
                  </CCol>
                 
                </CRow>
                <CRow className="mt-3">
                  <CCol xs={12} className="text-center">
                    <Link to="/register">
                      <CButton color="secondary" className="px-4">
                        Create Account
                      </CButton>
                    </Link>
                  </CCol>
                </CRow>
                <CRow className="mt-3">
                </CRow>
              </CForm>
            </CCardBody>
          </CCard>
        </CContainer>
      </CCol>
    </div>
  )
}

export default Login
