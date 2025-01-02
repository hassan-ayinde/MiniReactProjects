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
            <p className='product-brand'>polo ralph</p>
            <h1 className='product-name'>custom fit polo bear oxford shirt</h1>
            <p className='product-description'>White polo with a touch of blue with a classic cut. made of smooth and fine cotton</p>
            <div className="product-price">
                <div className="discount">
                    <h2>$99.00</h2>
                    <h5>-25%</h5>
                </div>
                <div>
                    <h4>$132.00</h4>
                </div>
            </div>
            <div className="product-size">
                <h3>choose size</h3>
                <div className="size-options">
                    <p>S</p>
                    <p>M</p>
                    <p>L</p>
                    <p>XL</p>
                    <p>XXL</p>
                </div>
            </div>
            <button className='addToBag-btn'>add to bag</button>
        </div>
    </div>
  )
}

export default Product