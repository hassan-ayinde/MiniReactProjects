import React,{useState,useRef} from 'react'
import ProfileImage from '../assets/images/cover.png'
import { FontAwesomeIcon } from './FontAwesomeIcons';

const UserProfileCard = ({setErrorMessage}) => {
  const [image,setImage] = useState(ProfileImage);
  const fileInputRef = useRef(null);

  const MAX_FILE_SIZE_MB = 1;

  const handleProfileImageContainer = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  }

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file){
      const fileSizeMB = file.size / (1024 * 1024);

      if (fileSizeMB > MAX_FILE_SIZE_MB) {
        setErrorMessage('Please upload an image less than 1MB.');
        return;
      }

      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      setErrorMessage(''); // Clear error if the upload is successful
    }
  }
  return (
    <div className='userprofile-card'>
      <div onClick={handleProfileImageContainer}>
        <div className='profile-img-wrapper'>
          <img src={image} alt="" />
          <span>
            <FontAwesomeIcon icon='fa-camera'/>
          </span>
        </div>
        <input type="file"
          accept='image/*'
          capture="environment"
          style={{display:'none'}}
          ref={fileInputRef}
          onChange={handleProfileImageChange}
        />
      </div>
      <div>
        <h2>Lisa Richardson</h2>
        <h5>Ethical Hacker</h5>
        {/* {errorMessage && <p className="error-message">{errorMessage}</p>} */}
      </div>
    </div>
  )
}

export default UserProfileCard