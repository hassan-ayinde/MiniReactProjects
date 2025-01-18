import React from 'react'

const ProductItems = ({imgSrc, productTitle, productPrice}) => {
  return (
    <div className='flex my-4'>
        <div className='w-20 h-20 rounded-lg overflow-hidden'>
          <img src={imgSrc} alt="" className='w-full h-full object-cover'/>
        </div>
        <div className='flex-grow ml-4 flex flex-col justify-evenly'>
            <h2 className='sm:text-sm font-medium'>{productTitle}</h2>
            <div className='flex items-center space-x-1 text-sm'>
              <button className='bg-slate-300 rounded-sm h-fit px-1'>-</button>
              <span>1</span>
              <button className='bg-slate-300 rounded-sm h-fit px-1'>+</button>
            </div>
        </div>
        <div className='flex flex-col items-end justify-evenly'>
          <button className='text-slate-500'>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <h3 className='font-semibold text-sm'>{productPrice}</h3>
        </div>
    </div>
  )
}

export default ProductItems