import React from 'react'
import ProductItems from './ProductItems'

const ProductList = ({products}) => {
  return (
    <div>
        <div className='flex justify-between items-center'>
            <h1 className='font-semibold'>Your product list</h1>
            <p>{products.length} Items</p>
        </div>
        {products.map((product) => (
        <ProductItems 
          key={product.id}
          imgSrc={product.imgSrc}
          productTitle={product.title}
          productPrice={`$${product.price.toFixed(2)}`}
        />
      ))}
    </div>
  )
}

export default ProductList