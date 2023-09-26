import React, { useEffect, useState } from 'react'
import { Outlet,useNavigate } from 'react-router-dom'

function NestedExample() {
    let [page,setPage] = useState(0)
    let navigate = useNavigate()

    useEffect(()=>{
        navigate('accounts')
    },[])

  return <div className="container-fluid">
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Nested Example</h1>
    </div>
    <p>This page will show you an example of how nested components can be achieved using outlet component</p>
    
    <div className="container-fluid">
        <ul className='pageButtons'>
            <li className={page===0?"active":""} onClick={()=>{
                setPage(0)
                navigate('accounts')
            }}>Accounts</li>
            <li className={page===1?"active":""} onClick={()=>{
                setPage(1)
                navigate('products')
            }}>Products</li>
            <li className={page===2?"active":""} onClick={()=>{
                setPage(2)
                navigate('receipts')
            }}>Recipts</li>
            <li className={page===3?"active":""} onClick={()=>{
                setPage(3)
                navigate('staffs')
            }}>Staff</li>
        </ul>
    </div>
    <div className="container-fluid">
        <Outlet/>
    </div>

  </div>
}

export default NestedExample