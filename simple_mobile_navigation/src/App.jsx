import React,{useState} from 'react'
import MenuList from './components/MenuList'
import UserProfileCard from './components/UserProfileCard'
import {FontAwesomeIcon} from './components/FontAwesomeIcons'
import './App.css'

function App() {
  const [errorMessage, setErrorMessage] = useState('');
  const footerIcons = [
    <FontAwesomeIcon icon='fa-house'/>,
    <FontAwesomeIcon icon='fa-chart-line'/>,
    <FontAwesomeIcon icon='fa-envelope'/>,
    <FontAwesomeIcon icon='fa-user'/>,
  ]

  return (
    <div className='app'>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <UserProfileCard setErrorMessage={setErrorMessage}/>
      <MenuList/>
      <div className='footer-icons'>
        <ul>
          {footerIcons.map((footerIcon, index) => {
            return (
              <li key={index}>
                {footerIcon}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default App
