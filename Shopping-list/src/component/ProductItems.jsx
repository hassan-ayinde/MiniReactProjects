import React from 'react'

const ProductItems = ({imgSrc, productTitle, productPrice}) => {
  return (
    <div className='flex items-center my-4'>
        <div className='w-20 h-20 rounded-lg overflow-hidden'>
          <img src={imgSrc} alt="" className='w-full h-full object-cover'/>
        </div>
        <div className='flex-grow ml-4'>
            <h2>{productTitle}</h2>
            <div className='flex items-center space-x-2 text-sm mt-2'>
              <button className='bg-slate-300 rounded-sm h-fit px-0.5'>-</button>
              <span>1</span>
              <button className='bg-slate-300 rounded-sm h-fit px-0.5'>+</button>
            </div>
        </div>
        <div className=''>
          <button>
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <h3 className='mt-1'>{productPrice}</h3>
        </div>
    </div>
  )
}

export default ProductItems