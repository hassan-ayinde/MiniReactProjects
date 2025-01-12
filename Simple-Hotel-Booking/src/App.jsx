import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons'
import HotelRoom from './assets/images/hotel-room.jpg'
import HotelLounge from './assets/images/hotel-lounge.jpg'
import HotelFront from './assets/images/hotel-front.jpg'
import HotelPool from './assets/images/hotel-pool.jpg'
import './App.css'

function App() {

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  // Function to dynamically set day classes
  const getDayClass = (date) => {
    if (startDate && endDate) {
      if (date.getTime() === startDate.getTime() || date.getTime() === endDate.getTime()) {
        return 'bg-purple-600 text-white'; // Highlight check-in and check-out dates
      }
      if (date > startDate && date < endDate) {
        return 'bg-orange-600 text-gray-900'; // Highlight days between
      }
    }
    return undefined;
  };

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='App sm:max-w-2xl max-[639px]:w-96 sm:w-full max-[568px]:w-72 flex flex-col-reverse sm:flex-row gap-5 p-6 rounded-2xl'>
        <div className='sm:w-full sm:flex flex-col'>
          <form action="">
            <div className="mb-5 relative">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Check In</label>
              <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}
                selectsStart startDate={startDate} endDate={endDate}
                dayClassName={getDayClass} minDate={new Date()}
                dateFormat="d MMMM, yyyy"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholderText="Select check-in date" required 
              />
              <span className='absolute bottom-0 right-0 p-2'>
                <FontAwesomeIcon icon={faCalendarDays} 
                  className='text-gray-500 dark:text-gray-400'

                />
              </span>
            </div>

            <div className="mb-5 relative">
              <label for="checkout" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Check Out</label>
              <DatePicker selected={endDate} onChange={(date) => setEndDate(date)}
                selectsEnd startDate={startDate} endDate={endDate} minDate={startDate}
                dayClassName={getDayClass}
                className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                required
                placeholderText="Select check-out date"
                dateFormat="d MMMM, yyyy"
              />
              <span className='absolute bottom-0 right-0 p-2'>
                <FontAwesomeIcon icon={faCalendarDays} className='text-gray-500 dark:text-gray-400' />
              </span>
            </div>


            <div className="flex items-center gap-5">
              <div className='w-full'>
                <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Adults</label>
                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <div className='w-full'>
                <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Children</label>
                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
            </div>
            <div className='mt-5'>
              <button className='bg-orange-600 text-white w-full rounded-full py-1'>Book a Room</button>
            </div>
          </form>
        </div>
        <div>
          <div>
            <figure>
              <img src={HotelRoom} alt="" />
              <figcaption></figcaption>
            </figure>
          </div>
          <div className='grid grid-cols-3 gap-2 mt-4'>
            <div>
              <img src={HotelLounge} alt="" srcset="" className='h-20 object-cover w-full'/>
            </div>
            <div>
              <img src={HotelFront} alt="" className='h-20 object-cover w-full'/>
            </div>
            <div>
              <img src={HotelPool} alt="" className='h-20 object-cover w-full'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
