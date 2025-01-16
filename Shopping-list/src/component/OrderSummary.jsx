import React from 'react'


const OrderSummary = ({subtotal, tax, total, shipping}) => {
  return (
    <div>
        <div>
            <h1 className='font-bold'>Order Summary</h1>
        </div>
        <div className='flex justify-between items-center font-semibold mt-3'>
            <p>Subtotal</p>
            <p>${subtotal.toFixed(2)}</p>
        </div>
        <div className='flex justify-between items-center font-semibold mt-3'>
            <p>Tax</p>
            <p>${tax.toFixed(2)}</p>
        </div>
        <div className='flex justify-between items-center font-semibold mt-3 border-b-2 border-gray-200 pb-5'>
            <p>Shipping</p>
            <p>${shipping.toFixed(2)}</p>
        </div>
        <div className='flex justify-between items-center font-semibold my-3'>
            <p>Total</p>
            <p>${total.toFixed(2)}</p>
        </div>
        <button className='w-full bg-black text-white rounded-md py-2 mt-3'>Pay Now</button>
    </div>
  )
}

export default OrderSummary