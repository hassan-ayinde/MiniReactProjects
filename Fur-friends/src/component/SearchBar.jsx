import React from 'react'
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <form class="max-w-sm mx-auto my-4">
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <CiSearch class="h-5 w-5 text-gray-400 dark:text-gray-300" aria-hidden="true" />
        </div>
        <input type="text" id="email-address-icon" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-10 p-1.5" placeholder="Search for a friend"/>
    </div>
    </form>
  )
}

export default SearchBar