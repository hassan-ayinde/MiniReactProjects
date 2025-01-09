import PasswordGenerator from './component/PasswordGenerator'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCopy} from '@fortawesome/free-regular-svg-icons'
import {faArrowsRotate} from '@fortawesome/free-solid-svg-icons'
import './App.css'

function App() {

  const iconStyle = {
    cursor: 'pointer',
    color: '#AC58D3',
  }

  
  return (
    <div className='App'>
      <h1>Generate Password</h1>
      <div className="password-display-container">
        <p>generated password</p>
        <div className="password-display">
          <input type="text" readOnly name="" id="" />
          <FontAwesomeIcon icon={faCopy} style={iconStyle}/>
          <FontAwesomeIcon icon={faArrowsRotate}  style={iconStyle}/>
        </div>
      </div>
      <div className="character-length">
        <p>character length: </p>
        <input type="range" name="" id="customRange" min='4' max='32' value='12'/>
      </div>
      <div>
        <p>settings</p>

        <div className="setting">
          <p>Include Uppercase Letters</p>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
        </div>

        <div className="setting">
          <p>Include Lowercase Letters</p>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
        </div>

        <div className="setting">
          <p>Include Numbers</p>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
        </div>

        <div className="setting">
          <p>Include Symbols</p>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
        </div>
      </div>

      <div>
        <button className='btn-generate'>Generate Password</button>
      </div>

      {/* <PasswordGenerator  /> */}
    </div>
  )
}

export default App
