import React from 'react'
import { FaShieldDog } from "react-icons/fa6";

const Header = () => {
  return (
    <div className='flex items-center gap-2 h-14 bg-blue-500 text-white text-2xl'>
        <FaShieldDog />
        <h1>FurEver Friends</h1>
    </div>
  )
}

export default Header