import React from 'react'
import { useNavigate } from 'react-router-dom'
function UseLogout() {
    let navigate = useNavigate()
  return ()=>{
    navigate('/')
  }
}

export default UseLogout