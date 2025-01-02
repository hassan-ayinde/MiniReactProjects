import React from 'react'
import PoloFront from '../assets/images/polo-colored-front.png'
import PoloBack from '../assets/images/polo_colored-back.png'
import PoloSide from '../assets/images/polo-colored-side.png'

const Product = () => {
  return (
    <div className="product">
        <div className="product-image">
            <div className="product-image-main">
                <img src={PoloFront} alt="" />
            </div>
            <div className='product-image-thumbnails'>
                <img src={PoloFront} alt="" />
                <img src={PoloSide} alt="" />
                <img src={PoloBack} alt="" />
            </div>
        </div>
        <div className="product-details">
            hello
        </div>
    </div>
  )
}

export default Product