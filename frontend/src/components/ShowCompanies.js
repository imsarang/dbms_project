import React, { useEffect, useState } from 'react'
import '../styles/companies.css'
const ShowCompanies = () => {

    const [companies,setCompanies] = useState([])
    useEffect(()=>{
        getAllCompanies()
    },[])

    const getAllCompanies = async()=>{
        const ans = await fetch('http://localhost:5000/api/company/get')
        const result = await ans.json()
        setCompanies(result.result)
        // console.log(companies);
        // console.log(result.result);
    }
  return (
    <div className='companies'>
        <div className='company_cards'>
            {
                companies.map((item,index)=>{
                    return <div key={index} className='company-card'>
                        <div className='company-name'>
                            {item.company_name}
                        </div>
                        <div className='company-stock'>
                            Number of stocks : {item.no_of_stocks}
                        </div>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default ShowCompanies