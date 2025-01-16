import './App.css'
import ProductList from './component/ProductList'
import OrderSummary from './component/OrderSummary'

function App() {

  return (
    <div className='app sm:flex sm:w-11/12'>
      <div className='w-96 m-auto sm:m-0 bg-white px-5 py-3 rounded-lg shadow-lg'>
        <ProductList />
      </div>
      <div className='w-96 m-auto sm:m-0 sm:h-fit bg-white px-5 py-3 rounded-lg shadow-lg mt-3'>
        <OrderSummary />
      </div>
    </div>
  )
}

export default App
