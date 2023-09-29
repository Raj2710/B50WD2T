import React, { useState,useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {toast} from 'react-toastify'
import { UserDataContext } from './context/UserContext'
function Home() {
    let navigate = useNavigate()
  let {API_URL} = useContext(UserDataContext)
    let [email,setEmail] = useState("")
    let [password,setPassword] = useState("")
    
    const validatePassword = async(e)=>{
      e.preventDefault()
      try {
       let res = await axios.get(API_URL)
       if(res.status===200)
       {
          let matchedData = res.data.filter((e)=>email===e.email)
          if(matchedData.length)
          {
            if(password===matchedData[0].password)
            {
                sessionStorage.setItem('auth',true)
                navigate('/dashboard')
            }
            else
            {
              toast.error("Invalid Password")
            }
          }
          else{
            toast.error("Invalid Email")
          }
       }
      } catch (error) {
        console.log(error)
         toast.error("Internal Server Error")
      }
       
     }
    
  return <>
    <div className="container-fluid ps-md-0">
  <div className="row g-0">
    <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
    <div className="col-md-8 col-lg-6">
      <div className="login d-flex align-items-center py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-lg-8 mx-auto">
              <h3 className="login-heading mb-4">Welcome back!</h3>

              {/* <!-- Sign In Form --> */}
              <form>
                <div className="form-floating mb-3">
                  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e)=>setEmail(e.target.value)}/>
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                  <label htmlFor="floatingPassword">Password</label>
                </div>

                <div className="d-grid">
                  <button className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2" onClick={(e)=>validatePassword(e)}>Sign in</button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  </>
}

export default Home