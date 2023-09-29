import React from 'react'
import { Navigate } from 'react-router-dom'

function ProtectedRoute({children}) {
    let auth = sessionStorage.getItem('auth')
  return auth==="true" ? children : <Navigate to='/home'/>
}

export default ProtectedRoute