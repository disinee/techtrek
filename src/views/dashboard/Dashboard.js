import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'
import MainChart from './MainChart'

const Dashboard = () => {
  return (
    
      <CRow className="text-center">
        <CRow className="text-center my-2">
          <CCol>
            <h2>Level 1 
            </h2>
          </CCol>
        </CRow>
        {/* Horizontal Divider */}
        <hr />
        <CCol xs={4}>
          <Link to="/level1" style={{ textDecoration: 'none' }}>
            <CButton color="primary" size="lg" style={{ width: '100%', height: '100px' }}>
              Build your Own Calculator
            </CButton>
          </Link>
        </CCol>
        <CCol xs={4}>
          <CButton color="primary" size="lg" style={{ width: '100%', height: '100px' }}>
          
          </CButton>
        </CCol>
        <CCol xs={4}>
          <CButton color="primary" size="lg" style={{ width: '100%', height: '100px' }}>
            
          </CButton>
        </CCol>
        <CRow className="text-center my-2">
          <CCol>
            <h2>Level 2 
            </h2>
          </CCol>
        </CRow>
        {/* Horizontal Divider */}
        <hr />
        <CCol xs={4}>
          <Link to="/calculator" style={{ textDecoration: 'none' }}>
            <CButton color="secondary" size="lg" style={{ width: '100%', height: '100px' }}>
              Guess the Number
            </CButton>
          </Link>
        </CCol>
        <CCol xs={4}>
          <CButton color="secondary" size="lg" style={{ width: '100%', height: '100px' }}>
           
          </CButton>
        </CCol>
        <CCol xs={4}>
          <CButton color="secondary" size="lg" style={{ width: '100%', height: '100px' }}>
            
          </CButton>
        </CCol>
        <CRow className="text-center my-2">
          <CCol>
            <h2>Level 3 
            </h2>
          </CCol>
        </CRow>
        {/* Horizontal Divider */}
        <hr />
        <CCol xs={4}>
          <Link to="/calculator" style={{ textDecoration: 'none' }}>
            <CButton color="dark" size="lg" style={{ width: '100%', height: '100px' }}>
              Decrypt the Secret Message
            </CButton>
          </Link>
        </CCol>
        <CCol xs={4}>
          <CButton color="dark" size="lg" style={{ width: '100%', height: '100px' }}>
            
          </CButton>
        </CCol>
        <CCol xs={4}>
          <CButton color="dark" size="lg" style={{ width: '100%', height: '100px' }}>
            
          </CButton>
        </CCol>
      </CRow>

      
    
  )
}

export default Dashboard
