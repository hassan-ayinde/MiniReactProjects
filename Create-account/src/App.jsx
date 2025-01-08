import React, {useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FontAwesomeIcon } from './component/FontAwesomeIcons';
import './App.css'


function App() {
  const [passwordType, setPasswordType] = useState('password');
  const [icon, setIcon] = useState(['far', 'eye']); // Initial icon
  const [account, setAccount] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const togglePasswordVisibility = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
      setIcon(['far', 'eye-slash']);
    } else {
      setPasswordType('password');
      setIcon(['far', 'eye']);
    }
  };

  const handleInput = (e) => {
    const {name, value} = e.target;
    setAccount({
      ...account,
      [name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(account);
    setAccount({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    });

  }

  const iconStyle = {
    position: 'absolute',
    top: '13px',
    right: '10px',
    transform: 'translate(-10, 10%)',
    color: 'gray',
    cursor: 'pointer'
  }

  return (
    <div className="app-container">
      <div className='form-header'>
        <h1 className='text-uppercase'>Start for free</h1>
        <p>Create new account</p>
      </div>
      <form action="" onSubmit={handleSubmit}>
        <div class='row'>
          <div class="form-floating col-6">
            <input type="text" class="form-control" name='firstName' value={account.firstName} onChange={handleInput} id="floatingInputFirstName" placeholder='FirstName' autoComplete='no'/>
            <FontAwesomeIcon icon={['far', 'address-card']} style={iconStyle}/>
            <label for="floatingInputFirstName">First Name</label>
          </div>
          <div class="form-floating col-6">
            <input type="text" class="form-control" onChange={handleInput} value={account.lastName} id="floatingLastName" name='lastName' placeholder="LastName" autoComplete='no'/>
            <FontAwesomeIcon icon={['far', 'address-card']} style={iconStyle}/>
            <label for="floatingLastName">Last Name</label>
          </div>
        </div>
        <div class="form-floating">
          <input type="email" class="form-control" onChange={handleInput} value={account.email} id="floatingPassword" name='email' placeholder="email" autoComplete='no'/>
          <label for="floatingPassword">Email</label>
          <FontAwesomeIcon icon={['far', 'envelope']} style={iconStyle}/>
        </div>
        <div class="form-floating password-container">
          <input type={passwordType} class="form-control" onChange={handleInput} value={account.password} id="floatingPassword" name='password' placeholder="Password"/>
          <FontAwesomeIcon icon={icon} style={iconStyle} onClick={togglePasswordVisibility}/>
          <label for="floatingPassword">Password</label>
        </div>
        <p>
          Already have an account? 
          <a href='#'> Sign in</a>
        </p>
        <button type='submit' class='btn btn-primary w-100 rounded-5'>Create Account</button>
      </form>
    </div>
  )
}

export default App
