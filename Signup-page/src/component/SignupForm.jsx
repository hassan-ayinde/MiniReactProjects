import React from 'react'

const SignupForm = () => {
    const btnStyle = {
        width: '100%',
    }
  return (
    <div className='w-fit m-auto bg-white px-7 py-2 justify-between rounded-lg shadow-lg'>
        <h1>Sign Up</h1>
        <p className='text-sm'>Join us now! Sign up to kick start your journey</p>
        <form action="">
            <div className="relative my-6">
                <input type="text" id="floating_outlined_name" className="border block px-2.5 py-2.5 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer leading-none" placeholder=" " />
                <label for="floating_outlined_name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Name</label>
            </div>
            <div className="relative my-6">
                <input type="email" id="floating_outlined_email" className="border block px-2.5 py-2.5 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer leading-none" placeholder=" " />
                <label for="floating_outline_email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Email</label>
            </div>
            <div className="relative">
                <input type="password" id="floating_outlined_password" className="border block px-2.5 py-2.5 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer leading-none" placeholder=" " />
                <label for="floating_outlined_password" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Password</label>
            </div>
            <div>
                <button className='bg-slate-800 text-white' style={btnStyle}>Sign up</button>
            </div>
        </form>
        <div className=''>
            <p>
                <span>
                    Already have an account? 
                </span>
                <a href="#">Log In</a>
            </p>
            <div className="flex items-center justify-center my-4 ">
                <div className="h-px bg-gray-300 flex-1"></div>
                <span className="px-3 text-gray-500 text-sm">or</span>
                <div className="h-px bg-gray-300 flex-1"></div>
            </div>
            <div>
                <button className='outline outline-1 outline-solid outline-gray-300' style={btnStyle}>Sign up with Google</button>
            </div>
        </div>
    </div>
  )
}

export default SignupForm