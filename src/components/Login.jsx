import React,{useState} from 'react'
import AxiosService from '../common/ApiService'
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom'
function Login() {
    let [email,setEmail] = useState("")
    let [password,setPassword] = useState("")
    let navigate = useNavigate()
    let validateLogin = async(e)=>{
        e.preventDefault()
        try {
            let res = await AxiosService.post('/user/login',{
                email,
                password
            })
            if(res.status===200)
            {
                toast.success("Login Successfull")
                sessionStorage.setItem('token',res.data.token)
                navigate('/dashboard')
            }
        } catch (error) {
            toast.error(error.response.data.message || "Error Occoured! Please try after some time")
        }
    }
  return  <div className="container-fluid ps-md-0">
        <div className="container">
          <div className="row">
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
                <button className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2" onClick={(e)=>validateLogin(e)}>Sign in</button>
            </div>

            </form>            
    </div>
  </div>
</div>
}

export default Login