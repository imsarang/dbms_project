import React, { useState } from 'react'
import '../styles/createCompany.css'

const CreateCompany = () => {
  const [company,setCompany] = useState({
    name:"",
    buyingPrice:0,
    no_of_stocks:0
  })
  const handleChange=(e)=>{
    setCompany({...company,[e.target.name]:e.target.value})
  }
  const handleSubmit = async(e)=>{
    e.preventDefault()
  }
  return (
    <div className='create'>
      <form className='form-create' onSubmit={handleSubmit}>
      <div className='create-attr-div'>
        <input type='text' className='create-input-tag' placeholder='Company name' name='name' value={company.name} onChange={(e)=>handleChange(e)}/>
      </div>
      <div className='create-attr-div'>
        <input type='text' className='create-input-tag' placeholder='Buying Price' name='buyingPrice' value={company.buyingPrice} onChange={(e)=>handleChange(e)}/>
      </div>
      <div className='create-attr-div'>
        <input type='text' className='create-input-tag' placeholder='Number of Stocks' name='no_of_stocks' value={company.no_of_stocks} onChange={(e)=>handleChange(e)}/>
      </div>
      <button className='btn-create' type='submit'>Create</button>
      </form>
    </div>
  )
}

export default CreateCompany