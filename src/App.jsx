import { useState } from "react"
import Sidebar from "./components/Sidebar"
import Dashboard from "./components/Dashboard"
import Create from "./components/Create"
import Edit from "./components/Edit"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Navigate } from "react-router-dom"
import NestedExample from "./components/NestedExample"
import Receipts from "./components/NestedExample/Receipts"
import Accounts from "./components/NestedExample/Accounts"
import Products from "./components/NestedExample/Products"
import Staff from "./components/NestedExample/Staff"
import UseRef from "./components/Hooks/UseRef"
import UseReducer from "./components/Hooks/UseReducer"
import UserContext from "./components/context/UserContext"
import DashboardContext from "./components/context/DashboardContext"
import Home from "./components/Home"

function App() {
  return <>
    <div id='wrapper'>
      <BrowserRouter>
        <Routes>
            <Route path='dashboard' element={
            <UserContext>
              <DashboardContext>
              <Sidebar/><Dashboard/>
              </DashboardContext>
            </UserContext>}/>
            <Route path='create' element={
              <UserContext>
                <Sidebar/><Create/>
              </UserContext>
            }/>
            <Route path='edit/:id' element={
            <UserContext>
              <Sidebar/><Edit/>
            </UserContext>}/>
            <Route path='nested-example' element={<><Sidebar/><NestedExample/></>}>
                <Route path='accounts' element={<Accounts/>}/>
                <Route path='products' element={<Products/>}/>
                <Route path='receipts' element={<Receipts/>}/>
                <Route path='staffs' element={<Staff/>}/>
            </Route>
            <Route path='/useref' element={<><Sidebar/><UseRef/></>}/>
            <Route path='/usereducer' element={<><Sidebar/><UseReducer/></>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/*'  element={<Navigate to='/'/>}/>
        </Routes>
      </BrowserRouter>
       
    </div>
  </>
}

export default App