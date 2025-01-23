import React from 'react'
import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom'
import NavSection from './components/NavSection'
import Home from './components/navbars/Home'
import Catalog from './components/navbars/Catalog'
import Blog from './components/navbars/Blog'
import Contact from './components/navbars/Contact'
import './App.css'

function App() {

  return (
    <Router>
      <NavSection/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
