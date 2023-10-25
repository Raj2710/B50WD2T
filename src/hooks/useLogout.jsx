import React from 'react'
import { useNavigate } from 'react-router-dom'

function useLogout() {
    let navigate = useNavigate()
  return ()=>{
    sessionStorage.clear()
    navigate('/')
  }
}

export default useLogout