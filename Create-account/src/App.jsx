import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FontAwesomeIcon } from './component/FontAwesomeIcons';



function App() {
  const iconStyle = {
    position: 'absolute',
    top: '13px',
    right: '10px',
    transform: 'translate(-10, 10%)',
    color: 'gray'
  }

  return (
    <div className="app-container">
      <div className='form-header'>
        <h1 className='text-uppercase'>Start for free</h1>
        <p>Create new account</p>
      </div>
      <form action="">
        <div class='row'>
          <div class="form-floating col-6">
            <input type="text" class="form-control" id="floatingInputFirstName" placeholder="FirstName" autoComplete='no'/>
            <FontAwesomeIcon icon={['far', 'address-card']} style={iconStyle}/>
            <label for="floatingInputFirstName">First Name</label>
          </div>
          <div class="form-floating col-6">
            <input type="text" class="form-control" id="floatingLastName" placeholder="LastName" autoComplete='no'/>
            <FontAwesomeIcon icon={['far', 'address-card']} style={iconStyle}/>
            <label for="floatingLastName">Last Name</label>
          </div>
        </div>
        <div class="form-floating">
          <input type="email" class="form-control" id="floatingPassword" placeholder="Password"/>
          <label for="floatingPassword">Email</label>
          <FontAwesomeIcon icon={['far', 'envelope']} style={iconStyle}/>
        </div>
        <div class="form-floating password-container">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
          <FontAwesomeIcon icon={['far', 'eye']} style={iconStyle}/>
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
