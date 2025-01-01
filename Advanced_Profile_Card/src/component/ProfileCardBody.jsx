import React,{useState} from 'react'
import ProfilePicture from '../assets/images/profile_picture.png'
import { useFileUpload } from './useFileUpload';

const ProfileCardBody = () => {
  const {image: profileImage, fileInputRef, handleClick: handleProfileImageContainer, handleFileChange: handleProfileImageChange} = useFileUpload(ProfilePicture);
  const [following, setFollowing] = useState(false);
  const handleBtnClick = () => {
    setFollowing(!following);
  }
  const cameraIconStyle = {
    border: '2px solid grey', 
    width: '30px', 
    height: '30px', 
    borderRadius: '50%', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    cursor: 'pointer',
    zIndex: 9999,
    position: 'absolute',
    left: '50px',
    top: '20px',
    color: 'black',
  }
  return (
    <div>
      <div className='profile_card_body'>
        <div className='profile_image_container' onClick={handleProfileImageContainer}>
          <img src={profileImage} alt='profile' className='profile_image'/>
          <div style={cameraIconStyle}>
            <i class="fa-regular fa-image"></i>
          </div>
          <input type="file"
            accept="image/*"
            style={{ display: 'none' }}
            ref={fileInputRef}
            onChange={handleProfileImageChange}
          />
        </div>
        <button onClick={handleBtnClick}>{following?'Following':'Follow'}</button>
      </div>
      <div className='profile_card_body_info'>
        <div>
          <h2>Hassan Ayinde</h2>
          <p style={{color:'grey', fontSize:'14px'}}>@ayindeHassan</p>
        </div>
        <div style={{marginTop: '20px'}}>
          <p style={{fontSize:'1rem'}}>Design and physics may seem unrelated, yet they complement and enhance each other.</p>
        </div>
      </div>
    </div>
  )
}



export default ProfileCardBody