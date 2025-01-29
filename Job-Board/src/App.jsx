import React, {useState} from 'react'
import SearchBar from './components/SearchBar'
import JobListing from './components/JobListing'
import './App.css'

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = (query, loc) => {
    setSearchQuery(query);
    setLocation(loc);
  };

  return (
    <div className=''>
      <SearchBar onSearch={handleSearch}/>
      <JobListing searchQuery={searchQuery} location={location}/>
    </div>
  )
}

export default App