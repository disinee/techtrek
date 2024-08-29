// import React, { useEffect, useState, createRef } from 'react'
// import PropTypes from 'prop-types'
// import classNames from 'classnames'
// import { CRow, CCol, CCard, CCardHeader, CCardBody,CButton,CCollapse  } from '@coreui/react'
// import { rgbToHex } from '@coreui/utils'
// import { DocsLink } from 'src/components'
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
// import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism'




// const ThemeView = () => {
//   const [color, setColor] = useState('rgb(255, 255, 255)')
//   const ref = createRef()

//   useEffect(() => {
//     const el = ref.current.parentNode.firstChild
//     const varColor = window.getComputedStyle(el).getPropertyValue('background-color')
//     setColor(varColor)
//   }, [ref])

//   return (
//     <table className="table w-100" ref={ref}>
//       <tbody>
//         <tr>
//           <td className="text-body-secondary">HEX:</td>
//           <td className="font-weight-bold">{rgbToHex(color)}</td>
//         </tr>
//         <tr>
//           <td className="text-body-secondary">RGB:</td>
//           <td className="font-weight-bold">{color}</td>
//         </tr>
//       </tbody>
//     </table>
//   )
// }

// const ThemeColor = ({ className, children }) => {
//   const classes = classNames(className, 'theme-color w-75 rounded mb-3')
//   return (
//     <CCol xs={12} sm={6} md={4} xl={2} className="mb-4">
//       <div className={classes} style={{ paddingTop: '75%' }}></div>
//       {children}
//       <ThemeView />
//     </CCol>
//   )
// }

// ThemeColor.propTypes = {
//   children: PropTypes.node,
//   className: PropTypes.string,
// }

// const Level1Project1 = () => {
//   const [hintVisible, setHintVisible] = useState(false)
//   const codeString = `
// def add(a, b):
//     return a + b

// def subtract(a, b):
//     return a - b

// def multiply(a, b):
//     return a * b

// def divide(a, b):
//     if b != 0:
//         return a / b
//     else:
//         return "Cannot divide by zero"

// # Example usage:
// print("Addition:", add(5, 3))
// print("Subtraction:", subtract(5, 3))
// print("Multiplication:", multiply(5, 3))
// print("Division:", divide(5, 3))
//   `

//   const handleSubmit = () => {
//     alert("Your submission has been received!")
//   }
//   return (
//     <>
//      <div>
//       <h2>Create Your Own Calculator</h2>
//     </div>
//     <CRow className="my-4">
//         <CCol>
//           <p className="text-muted">
//             Welcome to the Calculator Coding Program. In this program, you will learn how to build your own calculator
//             from scratch so you can use it in class. This hands-on project will guide you through the process of
//             creating a functional and responsive calculator, while helping you understand the fundamental concepts of
//             python.  
//           </p>
//         </CCol>
//       </CRow>
//       <CRow>
//         <h4>Basic Calculator Functions in Python:</h4>
//         <CCol md={6}>
//           <SyntaxHighlighter language="python" style={coy}>
//             {codeString}
//           </SyntaxHighlighter>
//         </CCol>
//         <CCol md={6}>
//           <CCard>
//             <CCardBody>
//               <h4>Explanation:</h4>
//               <p className="text-muted">
//                 The code on the left defines basic arithmetic functions: addition, subtraction, multiplication, and division. 
//                 Each function takes two arguments and returns the result of the arithmetic operation.
//               </p>
//               <p className="text-muted">
//                 The `divide` function includes a condition to check if the second argument is zero to avoid division by zero errors.
//                 Example usage of each function is demonstrated at the bottom.
//               </p>
//             </CCardBody>
//           </CCard>
//         </CCol>
//       </CRow>
//       <CRow>
//         <CCol>
//           <h4>Your Task:</h4>
//           <p className="text-muted">
//            This calculator is too simple. School has harder maths questions and wants you to create a function to solve this:
//            A number is doubled and then 10 is added to it. It is then divided by 3 before 7 is subtracted from it. 
//           </p>
//         </CCol>
//       </CRow>
//       <CButton color="info" onClick={() => setHintVisible(!hintVisible)}>
//         {hintVisible ? 'Hide Hint' : 'Show Hint'}
//       </CButton> 
//       <CCollapse visible={hintVisible}>
//         <div className="mt-3">
//           <CCard className="bg-light p-3">
//             <p className="mb-0">
//               Hint: Consider the order of operations. Remember brackets can be used in coding too. 
//             </p>
//           </CCard>
//         </div>
//       </CCollapse>
//       <div className="mt-4">
//         <CButton color="success" onClick={handleSubmit}>
//           Submit Your Code
//         </CButton>
//       </div>
//     </>
//   )
// }

// export default Level1Project1
import React, { useEffect, useState, createRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { CRow, CCol, CCard, CCardHeader, CCardBody, CButton, CCollapse } from '@coreui/react'
import { rgbToHex } from '@coreui/utils'
import { DocsLink } from 'src/components'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism'
import Editor from "@monaco-editor/react";  // Import Monaco Editor

const ThemeView = () => {
  const [color, setColor] = useState('rgb(255, 255, 255)')
  const ref = createRef()

  useEffect(() => {
    const el = ref.current.parentNode.firstChild
    const varColor = window.getComputedStyle(el).getPropertyValue('background-color')
    setColor(varColor)
  }, [ref])

  return (
    <table className="table w-100" ref={ref}>
      <tbody>
        <tr>
          <td className="text-body-secondary">HEX:</td>
          <td className="font-weight-bold">{rgbToHex(color)}</td>
        </tr>
        <tr>
          <td className="text-body-secondary">RGB:</td>
          <td className="font-weight-bold">{color}</td>
        </tr>
      </tbody>
    </table>
  )
}

const ThemeColor = ({ className, children }) => {
  const classes = classNames(className, 'theme-color w-75 rounded mb-3')
  return (
    <CCol xs={12} sm={6} md={4} xl={2} className="mb-4">
      <div className={classes} style={{ paddingTop: '75%' }}></div>
      {children}
      <ThemeView />
    </CCol>
  )
}

ThemeColor.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

const Level1Project1 = () => {
  const [hintVisible, setHintVisible] = useState(false)
  const [code, setCode] = useState("# Type your solution here");  // State to manage code input

  const codeString = `
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    if b != 0:
        return a / b
    else:
        return "Cannot divide by zero"

# Example usage:
print("Addition:", add(5, 3))
print("Subtraction:", subtract(5, 3))
print("Multiplication:", multiply(5, 3))
print("Division:", divide(5, 3))
  `

  const handleSubmit = () => {
    alert("Your submission has been received!")
    console.log("Submitted code: ", code);  // This will log the code to the console
  }

  return (
    <>
     <div>
      <h2>Create Your Own Calculator</h2>
    </div>
    <CRow className="my-4">
        <CCol>
          <p className="text-muted">
            Welcome to the Calculator Coding Program. In this program, you will learn how to build your own calculator
            from scratch so you can use it in class. This hands-on project will guide you through the process of
            creating a functional and responsive calculator, while helping you understand the fundamental concepts of
            python.  
          </p>
        </CCol>
      </CRow>
      <CRow>
        <h4>Basic Calculator Functions in Python:</h4>
        <CCol md={6}>
          <SyntaxHighlighter language="python" style={coy}>
            {codeString}
          </SyntaxHighlighter>
        </CCol>
        <CCol md={6}>
          <CCard>
            <CCardBody>
              <h4>Explanation:</h4>
              <p className="text-muted">
                The code on the left defines basic arithmetic functions: addition, subtraction, multiplication, and division. 
                Each function takes two arguments and returns the result of the arithmetic operation.
              </p>
              <p className="text-muted">
                The `divide` function includes a condition to check if the second argument is zero to avoid division by zero errors.
                Example usage of each function is demonstrated at the bottom.
              </p>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol>
          <h4>Your Task:</h4>
          <p className="text-muted">
           This calculator is too simple. School has harder maths questions and wants you to create a function to solve this:
           A number is doubled and then 10 is added to it. It is then divided by 3 before 7 is subtracted from it. 
          </p>
        </CCol>
      </CRow>
      <CButton color="info" onClick={() => setHintVisible(!hintVisible)}>
        {hintVisible ? 'Hide Hint' : 'Show Hint'}
      </CButton>
      <CCollapse visible={hintVisible}>
        <div className="mt-3">
          <CCard style={{ backgroundColor: '#d6e68f', padding: '1rem' }}>
            <p className="mb-0">
              Hint: Consider the order of operations. Remember brackets can be used in coding too. 
            </p>
          </CCard>
        </div>
      </CCollapse>

      {/* Insert the code editor here */}
      <div className="my-4">
        <Editor
          height="40vh"
          language="python"
          theme="vs-dark"
          value={code}
          onChange={(value) => setCode(value)}
        />
      </div>

      <div className="mt-4">
        <CButton color="success" onClick={handleSubmit}>
          Submit Your Code
        </CButton>
      </div>
    </>
  )
}

export default Level1Project1