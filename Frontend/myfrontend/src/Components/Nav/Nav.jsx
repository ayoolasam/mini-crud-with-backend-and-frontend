import React from 'react'
import './Nav.css'
import { FaPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Nav = () => {
  return (
    <div className='Navbar'>
      <p>logo</p>
      <div className="Dashboard">
        <p>PRODUCTS</p>
      </div>

      <div className="functions">
        <Link to="/">
        <p>Home</p>
        </Link>
        
        <Link to="/add">
        <button>add <FaPlus /> </button>
        </Link>
        
      </div>
    </div>
  )
}

export default Nav