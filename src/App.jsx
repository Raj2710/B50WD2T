import React from 'react'
import {BrowserRouter, Routes, Route,Navigate} from 'react-router-dom'
import Create from './components/Create'
import Dashbaord from './components/Dashbaord'
import Profile from './components/Profile'

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/create' element={<Create/>}/>
        <Route path='/:id' element = {<Profile/>}/>
        <Route path='/' element = {<Dashbaord/>}/>
        <Route path='*' element={<Navigate to='/'/>}/>
      </Routes>
    </BrowserRouter>
  </>
}

export default App