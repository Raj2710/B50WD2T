import React,{useEffect,useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Edit = ({data,setData})=>{
  const params = useParams()
  let [name,setName] = useState("")
  let [username,setUserName] = useState("")
  let [email,setEmail] = useState("")
  let [mobile,setMobile] = useState("")
  let [batch,setBatch] = useState("")
  let navigate = useNavigate()

  //useEffect without dependency array - 
  //1. when component loads for the first time
  //2. When any of the state changes
  // useEffect(()=>{
  //   console.log("Use effect triggered")
  // })
 
  //useEffect with empty dependancy Array
  //1. when component loads for the first time
  
  // useEffect(()=>{
  //   console.log("Use effect triggered")
  // },[])


  //useEffect with dependancy array
  //1. when component loads for the first time
  // useEffect(()=>{
  //   console.log("Use effect triggered")
  // },[email,username])

  const getData = (index)=>{
    setName(data[index].name)
    setUserName(data[index].username)
    setEmail(data[index].email)
    setMobile(data[index].mobile)
    setBatch(data[index].batch)
  }


  useEffect(()=>{
    if(Number(params.id)<data.length)
    {
        getData(Number(params.id))
    }
    else
    {
      navigate('/dashboard')
    }
  },[])

  const handleEdit = ()=>{
      let newArray = [...data]
      newArray.splice(Number(params.id),1,{
        name,
        username,
        email,
        mobile,
        batch
      })
      setData(newArray)
      navigate('/dashboard')
  }

  return <>
  <div className='container-fluid'>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Edit User</h1>
      </div>
      <div className='row'>
        <Form>
        <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" value={name} placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text" value={username} placeholder="Enter User Name" onChange={(e)=>setUserName(e.target.value)}/>
          </Form.Group>
          
        
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" value={email} placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Mobile</Form.Label>
            <Form.Control type="text" value={mobile} placeholder="Enter Mobile" onChange={(e)=>setMobile(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Batch</Form.Label>
            <Form.Control type="text" value={batch} placeholder="Enter Batch" onChange={(e)=>setBatch(e.target.value)}/>
          </Form.Group>

          <Button variant="primary" onClick={handleEdit}>
            Submit
          </Button>
        </Form>
     </div>
    </div>
  </>
}

export default Edit