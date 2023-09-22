import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function Create({data,setData}) {
  let [name,setName] = useState("")
  let [username,setUserName] = useState("")
  let [email,setEmail] = useState("")
  let [mobile,setMobile] = useState("")
  let [batch,setBatch] = useState("")
  let navigate = useNavigate()

  let handleSave = ()=>{
    let newArray = [...data]//immutable deep copy
    newArray.push({
      name,
      email,
      username,
      mobile,
      batch
    })
    setData(newArray)//state update
    navigate('/dashboard')
  }
  return <>
    <div className='container-fluid'>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Create User</h1>
      </div>
      <div className='row'>
        <Form>
        <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text" placeholder="Enter User Name" onChange={(e)=>setUserName(e.target.value)}/>
          </Form.Group>
          
        
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Mobile</Form.Label>
            <Form.Control type="text" placeholder="Enter Mobile" onChange={(e)=>setMobile(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Batch</Form.Label>
            <Form.Control type="text" placeholder="Enter Batch" onChange={(e)=>setBatch(e.target.value)}/>
          </Form.Group>

          <Button variant="primary" onClick={()=>handleSave()}>
            Submit
          </Button>
        </Form>
     </div>
    </div>
  </>
}

export default Create