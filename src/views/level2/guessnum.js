import React, { useEffect, useState, createRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { CRow, CCol, CCard, CCardHeader, CCardBody,CButton,CCollapse  } from '@coreui/react'
import { rgbToHex } from '@coreui/utils'
import { DocsLink } from 'src/components'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism'

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

const Level2Project1 = () => {
const [hintVisible, setHintVisible] = useState(false)
const codeString = `
    import random

def number_guessing_game():
    print("Welcome to the Number Guessing Game!")
    print("I have selected a number between 1 and 100. Can you guess it?")
    
    # Generate a random number between 1 and 100
    secret_number = random.randint(1, 100)
    attempts = 0
    
    while True:
        try:
            # Get the player's guess
            guess = int(input("Enter your guess: "))
            attempts += 1
            
            # Check if the guess is correct
            if guess < secret_number:
                print("Too low! Try again.")
            elif guess > secret_number:
                print("Too high! Try again.")
            else:
                print(f"Congratulations! You've guessed the number in {attempts} attempts.")
                break
        
        except ValueError:
            print("Please enter a valid number.")

# Start the game
number_guessing_game()
    `
  
    const handleSubmit = () => {
      alert("Your submission has been received!")
    }
    return (
      <>
       <div>
        <h2>Guess The Number</h2>
      </div>
      <CRow className="my-4">
          <CCol>
            <p className="text-muted">
            In this task, the computer randomly selects a number within a specified range, and the player has to guess what it is. With each guess, the game provides feedback, such as whether the guess is too high or too low, helping the player to zero in on the correct number.
            This coding task is important because it teaches fundamental programming concepts like loops, conditionals, and random number generation. It's also a great way to practice writing clean and efficient code.   
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
                Computers can generate random numbers using functions. In this game, we use random.randint(1, 100) to generate a number between 1 and 100.
                </p>
                <p className="text-muted">
                The game asks you to enter a guess using the input() function. Whatever you type gets turned into a number using int(), so the program can compare it to the secret number.  
                </p>
                <p className="text-muted">
                The game uses a while loop to keep asking you for guesses until you get the right answer. A loop is like a circle—it keeps running the same code over and over until something changes.
                </p>
                <p className="text-muted">
                The game uses if, elif, and else statements to check if your guess is too low, too high, or just right.
                </p>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
        <CRow>
          <CCol>
            <h4>Your Task:</h4>
            <p className="text-muted">
             If the user guesses in less than 10 attempts, they get a "Horray! You are amazing!" message. 
             If the user guessed in 10 or more attempts, they get a "Great Job! Try to guess in 10 or less tries." message.
            </p>
          </CCol>
        </CRow>
        <CButton color="info" onClick={() => setHintVisible(!hintVisible)}>
          {hintVisible ? 'Hide Hint' : 'Show Hint'}
        </CButton> 
        <CCollapse visible={hintVisible}>
          <div className="mt-3">
            <CCard className="bg-light p-3">
              <p className="mb-0">
                Hint: consider what the conditional statments are. Code them using the less than and greater than sign. 
              </p>
            </CCard>
          </div>
        </CCollapse>
        <div className="mt-4">
          <CButton color="success" onClick={handleSubmit}>
            Submit Your Code
          </CButton>
        </div>
      </>
    )

}

export default Level2Project1
