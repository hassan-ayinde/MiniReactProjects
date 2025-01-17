import React, {useEffect} from 'react'
import axios from 'axios'

const PetList = () => {
    

  return (
    <div className='flex items-center gap-4 p-4 border-b border-gray-200'>
        <div>
            <h2>pet image</h2>
            <img src="" alt="" />
        </div>
        <div>
            <div className='flex items-center gap-2'>
                <h2>name</h2>
                <p>gender logo</p>
            </div>
            <div>
                <p>breed</p>
            </div>
            <div className='flex items-center gap-2'>
                <h2>location logo</h2>
                <p>distance</p>
            </div>
        </div>
        <div>
            <p>like logo</p>
        </div>
    </div>
  )
}

export default PetList