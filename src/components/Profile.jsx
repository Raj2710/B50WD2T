import React,{useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams,useNavigate } from 'react-router-dom';
import config from '../utils/config';
import {toast} from 'react-toastify'
import axios from 'axios';
function Profile() {
  let [firstName,setFName] = useState("")
  let [lastName,setLName] = useState("")
  let [email,setEmail] = useState("")
  let params = useParams()
  let navigate = useNavigate()

  const getUserById = async(id)=>{
    try {
      let res = await axios.get(`${config.API_URL}/user/${id}`)
      if(res.status===200)
      {
        setFName(res.data.user.firstName)
        setLName(res.data.user.lastName)
        setEmail(res.data.user.email)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message)
    }
  }

  const saveUserById = async()=>{
    try {
      let res = await axios.put(`${config.API_URL}/user/${params.id}`,{
        firstName,
        lastName,
        email
      })
      if(res.status===200)
      {
        toast.success(res.data.message)
        navigate('/')
      }
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }
  useEffect(()=>{
    if(params.id)
    {
      getUserById(params.id)
    }
    else
    {
      navigate('/')
    }
  },[])
  return <>
    <Form>
    <Form.Group className="mb-3">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="First Name" value={firstName} onChange={e=>setFName(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Last Name" value={lastName} onChange={e=>setLName(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={e=>setEmail(e.target.value)}/>
      </Form.Group>

      <Button variant="primary" onClick={()=>saveUserById()}>
        Submit
      </Button>
    </Form>
  </>
}

export default Profile