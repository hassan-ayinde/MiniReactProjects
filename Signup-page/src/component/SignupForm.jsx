import React from 'react';

const SignupForm = ({ closeModal, fontIcon }) => {

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative p-4 w-fit max-w-md bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-xl font-semibold">Sign Up</h3>
          <button
            type="button"
            onClick={closeModal}
            className="text-gray-400 hover:text-gray-900"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div className="p-4">
            <p className="text-sm">Join us now! Sign up to kick-start your journey</p>
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
                <div className="my-4">
                    <button className='bg-slate-800 text-white w-full py-1.5 rounded-lg '>Sign up</button>
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
                    <button className='outline outline-1 outline-solid outline-gray-300 w-full flex items-center justify-center gap-3 py-1 rounded-lg'>
                        {fontIcon}
                        <span>Sign up with Google</span>
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
