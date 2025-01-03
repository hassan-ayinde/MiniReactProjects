import React from 'react'
import ProfileImage from '../assets/images/cover.png'


const UserProfileCard = () => {
  return (
    <div className='userprofile-card'>
        <div>
            <img src={ProfileImage} alt="" />
        </div>
        <div>
            <h2>Lisa Richardson</h2>
            <h5>Ethical Hacker</h5>
        </div>
    </div>
  )
}

export default UserProfileCard