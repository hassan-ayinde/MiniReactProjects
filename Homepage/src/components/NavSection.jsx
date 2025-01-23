import React from 'react'
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { RiPlantFill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { LuUserRound } from "react-icons/lu";
import { CgShoppingBag } from "react-icons/cg";

const NavSection = () => {
  return (
    <nav>
        <div>
            <RiPlantFill />
            <h1>GrowGreen</h1>
        </div>
        <div>
            <ul>
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
        <div>
            <CiSearch />
            <LuUserRound />
            <CgShoppingBag />
        </div>
    </nav>
  )
}

export default NavSection