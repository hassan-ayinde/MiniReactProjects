import './App.css'
import MenuList from './components/MenuList'
import UserProfileCard from './components/UserProfileCard'
import {FontAwesomeIcon} from './components/FontAwesomeIcons'

function App() {
  const footerIcons = [
    <FontAwesomeIcon icon='fa-house'/>,
    <FontAwesomeIcon icon='fa-chart-line'/>,
    <FontAwesomeIcon icon='fa-envelope'/>,
    <FontAwesomeIcon icon='fa-user'/>,
  ]

  return (
    <div className='app'>
      <UserProfileCard/>
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
