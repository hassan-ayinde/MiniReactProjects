import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons'
import './App.css'

function App() {
  // const [checkIn, setCheckIn] = useState(new Date())

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
    <div className="App">
      <div>
        <form action="" className='max-w-sm mx-auto bg-o'>
          <div class="mb-5">
            <label for="checkin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Check In</label>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}
              selectsStart startDate={startDate} endDate={endDate}
              dayClassName={getDayClass} minDate={new Date()}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select check-in date" required 
            />
          </div>

          <div class="mb-5">
            <label for="checkout" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Check Out</label>
            <DatePicker selected={endDate} onChange={(date) => setEndDate(date)}
              selectsEnd startDate={startDate} endDate={endDate} minDate={startDate}
              dayClassName={getDayClass}
              className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required 
            />
          </div>


          <div className="flex items-center mb-5 gap-5">
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
          <div>
            <button className='bg-orange-600 text-white w-full'>Book a Room</button>
          </div>
        </form>
      </div>
      <div></div>
    </div>
  )
}

export default App
