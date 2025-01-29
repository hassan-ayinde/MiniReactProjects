import React, {useState} from 'react'
import { IoIosSearch } from "react-icons/io";
import { PiMapPinLight } from "react-icons/pi";
import JobListing from './JobListing';

const SearchBar = ({onSearch}) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [location, setLocation] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(searchQuery, location); // Pass values to the parent component
    };
  return (
    <div className='flex items-center justify-center'>
        <form 
            class="flex flex-col sm:flex-row items-center bg-gray-primary p-3 rounded-2xl gap-3 w-[90%] max-w-lg sm:w-[90%] sm:max-w-3xl transition-all duration-300 ease-linear mx-auto"
            onSubmit={handleSearch}
        >
            <div className='flex items-center w-full'>
                <div className='w-full'>
                    <div class="relative w-full">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <IoIosSearch />
                        </div>
                        <input type="text" id="" 
                            class="bg-gray-50 border border-gray-300 focus:outline-none rounded-s-lg text-gray-900 text-sm block w-full ps-10 p-1.5" 
                            placeholder="Find a job"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                <div className='relative w-1/2'>
                    <div className='absolute inset-y-0 inset-x-0 start-0 ps-1 flex items-center pointer-events-none'>
                        <PiMapPinLight />
                    </div>
                    <select id="countries" 
                        class="bg-gray-50 border border-gray-300 focus:outline-none rounded-e-lg text-gray-900 text-sm block w-full ps-5 p-1.5 cursor-pointer"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    >
                        <option>Localization</option>
                        <option>United States</option>
                        <option>Canada</option>
                        <option>France</option>
                        <option>Germany</option>
                        <option>Remote</option>
                    </select>
                </div>
            </div>
            <div className='w-full sm:w-fit'>
                <button type="submit" className='bg-pink-400 text-white px-3 py-1 rounded-xl w-full cursor-pointer hover:bg-pink-800'>Search</button>
            </div>
        </form>
        {/* <JobListing/> */}
    </div>
  )
}

export default SearchBar