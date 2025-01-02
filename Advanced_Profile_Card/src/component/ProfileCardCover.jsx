import React from 'react'
import { useFileUpload } from './useFileUpload';
import CoverImage from '../assets/images/Cover.png'

const ProfileCardCover = () => {
    const {image: coverImage, fileInputRef, handleClick, handleFileChange} = useFileUpload(CoverImage);

    console.log('hello');

    const profileCardCoverStyle = {
        backgroundImage: `url(${coverImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '120px',
        width: '100%',
        backgroundRepeat: 'no-repeat',
        borderRadius: '30px 30px 0 0',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    }
    const cameraIconStyle = {
        border: '2px solid black', 
        width: '30px', 
        height: '30px', 
        borderRadius: '50%', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        cursor: 'pointer',
        zIndex: 9999,
        position: 'absolute',
        right: '10px',
        bottom: '10px',
        color: 'black',
      }
  return (
    <div style={profileCardCoverStyle} onClick={handleClick}>
        <div style={cameraIconStyle}>
            <i class="fa-regular fa-image"></i>
        </div>
        <input type="file"
         accept="image/*"
         style={{ display: 'none' }}
         ref={fileInputRef}
         onChange={handleFileChange}
        />
    </div>
  )
}

export default ProfileCardCover