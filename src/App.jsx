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
import ProtectedRoute from './components/ProtectedRoute'
// import logo from './assets/react.svg'
function App() {
  return <>
  {/* <img src={logo}/> */}
    <div id='wrapper'>
      <BrowserRouter>
        <Routes>
            <Route path='dashboard' element={
              <ProtectedRoute>
                <UserContext>
                  <DashboardContext>
                  <Sidebar/>
                  <Dashboard/>
              </DashboardContext>
            </UserContext>
            </ProtectedRoute>}/>
            <Route path='create' element={
              <ProtectedRoute>
                <UserContext>
                  <Sidebar/>
                  <Create/>
                </UserContext>
              </ProtectedRoute>
            }/>
            <Route path='edit/:id' element={
              <ProtectedRoute>
                <UserContext>
                  <Sidebar/><Edit/>
                </UserContext>
            </ProtectedRoute>}/>
            <Route path='nested-example' element={<><ProtectedRoute><Sidebar/><NestedExample/></ProtectedRoute></>}>
                <Route path='accounts' element={<Accounts/>}/>
                <Route path='products' element={<Products/>}/>
                <Route path='receipts' element={<Receipts/>}/>
                <Route path='staffs' element={<Staff/>}/>
            </Route>
            <Route path='/useref' element={<><ProtectedRoute><Sidebar/><UseRef/></ProtectedRoute></>}/>
            <Route path='/usereducer' element={<><ProtectedRoute><Sidebar/><UseReducer/></ProtectedRoute></>}/>
            <Route path='/' element={
             <UserContext>
            <Home/>
            </UserContext>}/>
            <Route path='/*'  element={<Navigate to='/'/>}/>
        </Routes>
      </BrowserRouter>
       
    </div>
  </>
}

export default App