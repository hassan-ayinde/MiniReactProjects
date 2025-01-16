import React, {useState} from 'react'
import ProductList from './component/ProductList'
import OrderSummary from './component/OrderSummary'
import FirstImg from './assets/images/cream-1.jpg'
import SecondImg from './assets/images/cream-2.jpg'
import ThirdImg from './assets/images/cream-3.jpg'
import FourthImg from './assets/images/cream-4.jpg'
import './App.css'

function App() {
  const [products] = useState([
    { id: 1, title: 'Illuminating face cream', price: 12.22, imgSrc: FirstImg },
    { id: 2, title: 'Moisturizing face cream', price: 19.99, imgSrc: SecondImg },
    { id: 3, title: 'Intense Lift up serum', price: 29.99, imgSrc: ThirdImg },
    { id: 4, title: 'CBD Premium Oil', price: 39.99, imgSrc: FourthImg },
  ]);

  const subtotal = products.reduce((sum, product) => sum + product.price, 0);
  const tax = parseFloat((subtotal * 0.068).toFixed(2));
  const shipping = 0.0; // Assume free shipping for simplicity
  const total = subtotal + tax + shipping;

  return (
    <div className='app max-w-96 sm:flex gap-7 sm:max-w-xl'>
      <div className='w-full bg-white px-5 py-3 rounded-lg shadow-lg'>
        <ProductList products={products}/>
      </div>
      <div className='sm:w-80 sm:h-fit bg-white px-5 py-3 rounded-lg shadow-lg'>
        <OrderSummary subtotal={subtotal} tax={tax} shipping={shipping} total={total}/>
      </div>
    </div>
  )
}

export default App
