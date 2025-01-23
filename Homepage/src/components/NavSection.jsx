import React from 'react'
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { RiPlantFill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import { CgShoppingBag } from "react-icons/cg";

const NavSection = () => {
  return (
    <nav className="nav-section sm:flex justify-between items-center">
        <div className='flex items-center'>
            <RiPlantFill />
            <h1>GrowGreen</h1>
        </div>
        <div>
            <ul  className='sm:flex items-center sm:gap-3 md:gap-8'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/catalog">Catalog</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
        <div className='sm:flex items-center gap-4'>
            <IoSearch />
            <LuUserRound />
            <CgShoppingBag />
        </div>
    </nav>
  )
}

export default NavSection