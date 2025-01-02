import React, {useState} from 'react'
import PoloFront from '../assets/images/polo-colored-front.png'
import PoloBack from '../assets/images/polo_colored-back.png'
import PoloSide from '../assets/images/polo-colored-side.png'

const Product = () => {
    const [selectedImage, setSelectedImage] = useState(PoloFront);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const handleSelectedImage = (src,index) => {
        setSelectedImage(src);
        setSelectedIndex(index);
    }
  return (
    <div className="product">
        <div className="product-image">
            <div className="product-image-main">
                <img src={selectedImage} alt="" />
            </div>
            <div className='product-image-thumbnails'>
                <img src={PoloFront} alt="" 
                 onClick={() => handleSelectedImage(PoloFront,0)}
                 className={selectedIndex === 0 ? 'selected' : ''}
                />
                <img src={PoloSide} alt="" 
                 onClick={() => handleSelectedImage(PoloSide,1)}
                 className={selectedIndex === 1 ? 'selected' : ''}
                />
                <img src={PoloBack} alt="" 
                 onClick={() => handleSelectedImage(PoloBack,2)}
                 className={selectedIndex === 2 ? 'selected' : ''}
                />
            </div>
        </div>
        <div className="product-details">
            hello
        </div>
    </div>
  )
}

export default Product