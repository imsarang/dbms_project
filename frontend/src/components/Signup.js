import React, { useState } from 'react'
import '../styles/signup.css'
const Signup = () => {
  const [user,setUser] = useState({
    name:"",
    email:"",
    password:"",
    age:null,
    works_in:"",
    gender:""
  })

  const handleChange = (e)=>{
    setUser({...user,[e.target.name]: e.target.value})
  }
  const handleSubmit = async(e)=>{
    e.preventDefault()
  }
  return (
    <div className='signup'>
      <h1 className='sign-up-h1'>Sign Up</h1>
      <form onSubmit={handleSubmit} className='form-submit'>
        <div className='form-input-divs'>
          <div><input type='text' className='form-input-tag' name='name' value={user.name} onChange={(e)=>handleChange(e)} placeholder='Enter name'></input></div>
          <div><input type='email' className='form-input-tag' name='email' value={user.email} onChange={(e)=>handleChange(e)} placeholder='Enter Email'></input></div>
          <div><input type='password' className='form-input-tag' name='password' value={user.password} onChange={(e)=>handleChange(e)} placeholder='Enter Password'></input></div>
          <div><input type='text' className='form-input-tag' name='age' value={user.age} onChange={(e)=>handleChange(e)} placeholder='Enter Age'></input></div>
          <div><input type='text' className='form-input-tag' name='works_in' value={user.works_in} onChange={(e)=>handleChange(e)} placeholder='Enter Works In'></input></div>
          <div><input type='text' className='form-input-tag' name='gender' value={user.gender} onChange={(e)=>handleChange(e)} placeholder='Gender'></input></div>
        </div>
        <button type='submit' className='btn-submit'>
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default Signup