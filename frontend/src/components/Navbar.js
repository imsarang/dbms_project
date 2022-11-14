import React, { useState } from 'react'
import '../styles/navbar.css'
import {FaUserAlt} from 'react-icons/fa'
import DropDown from './DropDown'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const [dropdown,setDropdown] = useState(false)
  return (
    <div className='navbar'>
      <div className='nav-brand'>
      <Link to='/' className='link-navbar'>BRAND</Link>
      </div>
      <div className='nav-content'>
        <div className='nav-item'>
        <Link to='/' className='link-navbar-item'>About Us</Link>
        </div>
        <div className='nav-item'>
        <Link to='/' className='link-navbar-item'>Trade</Link>
        </div>
        <div className='nav-item'>
        <Link to='/' className='link-navbar-item'>Create</Link>
        </div>
        <div className='nav-item'>
        <Link to='/' className='link-navbar-item'>Register</Link>
        </div>
        <div className='nav-item-profile' onClick={()=>setDropdown(!dropdown)}>
          <FaUserAlt/>
        </div>
        {
          dropdown?<DropDown/>:<></>
        }
      </div>
    </div>
  )
}

export default Navbar