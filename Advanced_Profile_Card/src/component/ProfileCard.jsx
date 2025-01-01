import React from 'react'
import ProfileCardCover from './ProfileCardCover'
import ProfileCardBody from './ProfileCardBody'

const ProfileCard = () => {
  return (
    <div className='profile_card'>
        <ProfileCardCover />
        <ProfileCardBody />
    </div>
  )
}

export default ProfileCard