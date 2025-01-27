import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { PiMapPinLight } from "react-icons/pi";

const SearchBar = () => {
  return (
    <div>
        <form class="max-w-sm mx-auto flex items-center bg-gray-primary p-3 rounded-2xl">
            <div className='flex items-center'>
                <div>
                    <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <IoIosSearch />
                        </div>
                        <input type="text" id="" class="bg-gray-50 border border-gray-300 focus:outline-none rounded-s-lg text-gray-900 text-sm block w-full ps-10 p-1.5" placeholder="Find a job"/>
                    </div>
                </div>

                <div className='relative'>
                    <div className='absolute inset-y-0 inset-x-0 start-0 ps-1 flex items-center pointer-events-none'>
                        <PiMapPinLight />
                    </div>
                    <select id="countries" class="bg-gray-50 border border-gray-300 focus:outline-none rounded-e-lg text-gray-900 text-sm block w-full ps-5 p-1.5 cursor-pointer">
                        <option>United States</option>
                        <option>Canada</option>
                        <option>France</option>
                        <option>Germany</option>
                    </select>
                </div>
            </div>
            <div>
                <button type="submit" className='bg-pink-400 text-white px-3 py-1 rounded-2xl'>Search</button>
            </div>
        </form>
    </div>
  )
}

export default SearchBar