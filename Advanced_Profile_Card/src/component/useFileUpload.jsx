import { useState, useRef} from 'react';

export const useFileUpload = (initialImage,storageKey) => {
  const [image, setImage] = useState(() => {
    const savedImage = localStorage.getItem(storageKey);
    return savedImage || initialImage;
  });
  const fileInputRef = useRef(null);

  const handleClick = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result;
        setImage(base64Image);
        localStorage.setItem(storageKey,base64Image)
      }
      reader.readAsDataURL(file);
    }
  };

  return { image, fileInputRef, handleClick, handleFileChange };
};
