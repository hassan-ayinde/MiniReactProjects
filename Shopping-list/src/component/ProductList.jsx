import React from 'react'
import ProductItems from './ProductItems'
import FirstImg from '../assets/images/cream-1.jpg'
import SecondImg from '../assets/images/cream-2.jpg'
import ThirdImg from '../assets/images/cream-3.jpg'
import FourthImg from '../assets/images/cream-4.jpg'

const ProductList = () => {
  return (
    <div>
        <div className='flex justify-between items-center'>
            <h1 className='font-semibold'>Your product list</h1>
            <p>4 Items</p>
        </div>
        <ProductItems 
            imgSrc={FirstImg}
            productTitle='Illuminating face cream'
            productPrice='$12.22'
        />
        <ProductItems 
            imgSrc={SecondImg}
            productTitle='Moisturizing face cream'
            productPrice='$19.99'
        />
        <ProductItems 
            imgSrc={ThirdImg}
            productTitle='Intense Lift up serum'
            productPrice='$29.99'
        />
        <ProductItems 
            imgSrc={FourthImg}
            productTitle='CBD Premium Oil'
            productPrice='$39.99'
        />
    </div>
  )
}

export default ProductList