import React from 'react'
import {Routes,Route, Navigate} from 'react-router-dom'
import SignUp from '../components/Signup'
import SignIn from '../components/SignIn'
import Create from '../components/Create'
import Dashboard from '../components/Dashboard'
import Blog from '../components/Blog'
import Home from '../components/Home'


function AppRoutes() {
  return <Routes>
    <Route path='/create' element={<Create/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/blog/:id' element={<Blog/>}/>
    <Route path='/' element={<SignIn/>}/>
    <Route path='/*' element={<Navigate to = '/'/>}/>
    </Routes>
}

export default AppRoutes