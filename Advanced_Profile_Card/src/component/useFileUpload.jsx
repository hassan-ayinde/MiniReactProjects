import { useState, useRef } from 'react';

export const useFileUpload = (initialImage) => {
  const [image, setImage] = useState(initialImage);
  const fileInputRef = useRef(null);

  const handleClick = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  return { image, fileInputRef, handleClick, handleFileChange };
};
