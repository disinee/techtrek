import React from 'react'
import classNames from 'classnames'
import { Link, useNavigate } from 'react-router-dom'
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
  const navigate = useNavigate()
  const handleLevel1 = () => {
    navigate('/level1')
  }
  const handleLevel2 = () => {
    navigate('/level2')
  }
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
            <CButton color="primary" size="lg" style={{ width: '100%', height: '100px' }} onClick={handleLevel1}>
              Build your Own Calculator
            </CButton>

        </CCol>
        <CCol xs={4}>
          <CButton color="primary" size="lg" style={{ width: '100%', height: '100px' }}>
          Build A Travel Currency Convertor
          </CButton>
        </CCol>
        <CCol xs={4}>
          <CButton color="primary" size="lg" style={{ width: '100%', height: '100px' }}>
          Gift a Toggle Light  
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
          <CButton color="secondary" size="lg" style={{ width: '100%', height: '100px' }}onClick={handleLevel2}>
            Guess the Number
          </CButton>
        </CCol>
        <CCol xs={4}>
          <CButton color="secondary" size="lg" style={{ width: '100%', height: '100px' }}>
            Random Rock-Paper-Scissors
          </CButton>
        </CCol>
        <CCol xs={4}>
          <CButton color="secondary" size="lg" style={{ width: '100%', height: '100px' }}>
            Character Counter
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
              Morse Code Translator
            </CButton>
          </Link>
        </CCol>
        <CCol xs={4}>
          <CButton color="dark" size="lg" style={{ width: '100%', height: '100px' }}>
            Sudoku Solver
          </CButton>
        </CCol>
        <CCol xs={4}>
          <CButton color="dark" size="lg" style={{ width: '100%', height: '100px' }}>
            Tic-Tac-Toe
          </CButton>
        </CCol>
      </CRow>

      
    
  )
}

export default Dashboard
