import React,{useState,useRef, useEffect} from 'react'
import ProfileImage from '../assets/images/cover.png'
import { FontAwesomeIcon } from './FontAwesomeIcons';

const UserProfileCard = ({setErrorMessage}) => {
  const [image,setImage] = useState(ProfileImage);
  const fileInputRef = useRef(null);

  const MAX_FILE_SIZE_MB = 1;

  useEffect(() => {
    const storedImage = localStorage.getItem('profileImage');
    if (storedImage) {
      setImage(storedImage);
    }
  }, []);

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

      const reader = new FileReader();
      reader.onload = () => {
        const base64Image = reader.result;
        setImage(base64Image);
        localStorage.setItem('profileImage', base64Image); // Store image in localStorage
        setErrorMessage(''); // Clear error if the upload is successful
      };
      reader.readAsDataURL(file);
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
      <div className='userProfile-details'>
        <h2>Lisa Richardson</h2>
        <h5>Ethical Hacker</h5>
      </div>
    </div>
  )
}

export default UserProfileCard