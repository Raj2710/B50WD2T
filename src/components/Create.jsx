import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import config from '../utils/config';
import axios from 'axios';
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom';
function Create() {
  let [firstName,setFName] = useState("")
  let [lastName,setLName] = useState("")
  let [email,setEmail] = useState("")
  let navigate = useNavigate()

  let handleCreate = async()=>{
    try {
      let res = await axios.post(`${config.API_URL}/user`,{
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

  return <>
    <Form>
    <Form.Group className="mb-3">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="First Name" onChange={e=>setFName(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Last Name" onChange={e=>setLName(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={e=>setEmail(e.target.value)}/>
      </Form.Group>
 
      <Button variant="primary" onClick={()=>handleCreate()}>
        Submit
      </Button>
    </Form>
  </>
}

export default Create