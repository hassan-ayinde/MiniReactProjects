import React, {useState} from 'react'
import PasswordGenerator from './component/PasswordGenerator'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCopy} from '@fortawesome/free-regular-svg-icons'
import {faArrowsRotate} from '@fortawesome/free-solid-svg-icons'
import './App.css'

function App() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const generatePassword = () => {
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';
    let charSet = '';

    if (includeUppercase) charSet += upperCaseChars;
    if (includeLowercase) charSet += lowerCaseChars;
    if (includeNumbers) charSet += numberChars;
    if (includeSymbols) charSet += symbolChars;

    if (charSet === '') {
      setPassword('Select at least one option!');
      return;
    }

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      generatedPassword += charSet[randomIndex];
    }
    setPassword(generatedPassword);
  };

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
          <input type="text" readOnly name="" id="" value={password}/>
          <FontAwesomeIcon icon={faCopy} style={iconStyle}/>
          <FontAwesomeIcon icon={faArrowsRotate}  style={iconStyle}/>
        </div>
      </div>
      <div className="character-length">
        <p>character length: {length}</p>
        <input type="range" 
         onChange={(e) => setLength(Number(e.target.value))} 
         id="customRange" min='4' max='32' value={length}
        />
      </div>
      <div>
        <p>settings</p>
        <div className="setting">
          <p>Include Uppercase Letters</p>
          <label className="switch">
            <input type="checkbox" 
              onChange={(e) => setIncludeUppercase(e.target.checked)}
              checked={includeUppercase}
            />
            <span className="slider"></span>
          </label>
        </div>

        <div className="setting">
          <p>Include Lowercase Letters</p>
          <label className="switch">
            <input type="checkbox" 
              onChange={(e) => setIncludeLowercase(e.target.checked)}
              checked={includeLowercase}
            />
            <span className="slider"></span>
          </label>
        </div>

        <div className="setting">
          <p>Include Numbers</p>
          <label className="switch">
            <input type="checkbox" 
              onChange={(e) => setIncludeNumbers(e.target.checked)}
              checked={includeNumbers}
            />
            <span className="slider"></span>
          </label>
        </div>

        <div className="setting">
          <p>Include Symbols</p>
          <label className="switch">
            <input type="checkbox" 
              onChange={(e) => setIncludeSymbols(e.target.checked)}
              checked={includeSymbols}
            />
            <span className="slider"></span>
          </label>
        </div>
      </div>

      <div>
        <button className='btn-generate' onClick={generatePassword}>Generate Password</button>
      </div>

      {/* <PasswordGenerator  /> */}
    </div>
  )
}

export default App
