import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import'../styles/login.css'

const Login = () => {
  const navigate = useNavigate()
  const [user,setUser] = useState({
    email:"",
    password:""
  })
  const handleChange = (e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
  }

  return (
    <div className='login'>
      <h1 className='login-h1'>Login</h1>
      <form className='login-contents' onSubmit={handleSubmit}>
      <div><input type='text' name='email' placeholder='Enter Email' value={user.email} onChange={(e)=>handleChange(e)} className='login-input-tag'></input></div>
      <div><input type='password' name='password' placeholder='Password' value={user.password} onChange={(e)=>handleChange(e)} className='login-input-tag'></input></div>
      <button type='submit' className='login-btn'>Login</button>
      </form>
    </div>
  )
}

export default Login