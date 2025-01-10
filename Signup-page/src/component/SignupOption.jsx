import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const SignupOption = () => {
  return (
    <div className="flex flex-col w-fit m-auto bg-white px-7 py-2 justify-between h-48 rounded-lg shadow-lg text-center">
        <h1>Signup</h1>
        <p className='text-sm'>Join us now! Sign up to kick start your journey</p>
        <button className='outline outline-1 outline-slate-300 rounded-md flex items-center justify-center gap-3 py-0.5'>
            <FontAwesomeIcon icon={faGoogle} />
            <span>Sign up with Google</span>
        </button>
        <button className='bg-customBlue text-white flex items-center rounded-md justify-center gap-3 py-1'>
            <FontAwesomeIcon icon={faEnvelope} />
            <span>Sign up with Email</span>
            
        </button>
        <p>
            <span>
                Already have an account? 
            </span>
            <a href="#">Log In</a>
        </p>
    </div>
  )
}

export default SignupOption