import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope,faEye,faEyeSlash} from '@fortawesome/free-regular-svg-icons'
import SignupForm from './SignupForm'

const SignupOption = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const togglePassword = () => setShowPassword(!showPassword);

    const faIcon = {
        google: <FontAwesomeIcon icon={faGoogle} />,
        eye: <FontAwesomeIcon icon={faEye} />,
        eyeSlash: <FontAwesomeIcon icon={faEyeSlash} />
    }


  return (
    <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col w-fit m-auto bg-white px-7 py-2 justify-between h-56 rounded-lg shadow-lg text-center">
            <h1>Signup</h1>
            <p className='text-sm'>Join us now! Sign up to kick start your journey</p>
            <button className='outline outline-1 outline-slate-300 rounded-md flex items-center justify-center gap-3 py-0.5'>
                <FontAwesomeIcon icon={faGoogle} />
                <span>Sign up with Google</span>
            </button>
            <button 
            className='bg-customBlue text-white flex items-center rounded-md justify-center gap-3 py-1'
            onClick={openModal}>
                <FontAwesomeIcon icon={faEnvelope} />
                <span>Sign up with Email</span>
            </button>
            <p>
                <span>
                    Already have an account? 
                </span>
                <a href="#">Log In</a>
            </p>
            {isModalOpen && <SignupForm closeModal={closeModal} 
                fontIcon ={faIcon}
                showPassword={showPassword}
                togglePassword={togglePassword}
            />}
        </div>
    </div>
  )
}

export default SignupOption