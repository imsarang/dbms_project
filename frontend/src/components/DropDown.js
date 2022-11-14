import React from 'react'
import '../styles/navbar.css'
const DropDown = () => {
  return (
    <div className='dropdown'>
        <div className='dropdown-item'>Profile</div>
        <div className='dropdown-item'>Stocks Owned</div>
        <div className='dropdown-item'>Logout</div>
    </div>
  )
}

export default DropDown