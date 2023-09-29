import React,{useEffect,useState,useContext} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Formik, setIn } from 'formik';
import * as Yup from 'yup';
import { useParams,useNavigate } from 'react-router-dom';
import { UserDataContext } from './context/UserContext';
import axios from 'axios';
import {toast} from 'react-toastify'

const Edit = ()=>{
  const params = useParams()
  const {API_URL} = useContext(UserDataContext)
  const [initialValues,setInitialValues] = useState({
    name:"",
    email:"",
    username:"",
    mobile:"",
    batch:"",
    password:""
  })
  let navigate = useNavigate()

  const UserSchema = Yup.object().shape({
    name:Yup.string().required('* Required'),
    username:Yup.string().required('* Required').min(3,'* User Name should be atlest 3 characters'),
    email:Yup.string().email('* Invalid Email').required('* Required'),
    mobile:Yup.string().matches(/^\d{10}$/,'* Invalid Mobile Number').required('* Required'),
    batch:Yup.string()
  })

  const getData = async(id)=>{
    try { 
      let res = await axios.get(`${API_URL}/${id}`)
      if(res.status === 200)
      {
        setInitialValues(res.data)
      }
    } catch (error) {
      toast('Error Occoured')
    } 
  }

  const handleEditUser = async(values)=>{
    try {
      let res = await axios.put(`${API_URL}/${params.id}`,values)
      if(res.status===200)
      {
        navigate('/dashboard')
      }
    } catch (error) {
        toast.error("Error Occoured")
    }
  }


  useEffect(()=>{
    if(Number(params.id))
    {
        getData(Number(params.id))
    }
    else
    {
      navigate('/dashboard')
    }
  },[])


  return <>
    <div className='container-fluid'>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Create User</h1>
      </div>
      <div className='row'>
        <Formik
          initialValues={initialValues}
          validationSchema={UserSchema}
          enableReinitialize={true}
          onSubmit={(values)=>{
              handleEditUser(values)
          }}
        >
          {({ values,errors,touched,handleBlur,handleSubmit,handleChange})=>(
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value = {values.name} name='name' placeholder="Enter Name" onBlur={handleBlur} onChange={handleChange}/>
                {errors.name && touched.name ? <div style={{color:"red"}}>{errors.name}</div>:null}
              </Form.Group>
    
              <Form.Group className="mb-3">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="text" value = {values.username} name='username' placeholder="Enter User Name" onBlur={handleBlur} onChange={handleChange}/>
                {errors.username && touched.username ? <div style={{color:"red"}}>{errors.username}</div>:null}
              </Form.Group>
              
            
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value = {values.email} name='email' placeholder="Enter email"  onBlur={handleBlur} onChange={handleChange}/>
                {errors.email && touched.email ? <div style={{color:"red"}}>{errors.email}</div>:null}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' value={values.password} placeholder="Enter password"  onBlur={handleBlur} onChange={handleChange}/>
                {errors.password && touched.password ? <div style={{color:"red"}}>{errors.password}</div>:null}
              </Form.Group>
    
              <Form.Group className="mb-3">
                <Form.Label>Mobile</Form.Label>
                <Form.Control type="text" value = {values.mobile} name='mobile' placeholder="Enter Mobile" onBlur={handleBlur} onChange={handleChange}/>
                {errors.mobile && touched.mobile ? <div style={{color:"red"}}>{errors.mobile}</div>:null}
              </Form.Group>
    
              <Form.Group className="mb-3">
                <Form.Label>Batch</Form.Label>
                <Form.Control type="text" value = {values.batch} name='batch' placeholder="Enter Batch" onBlur={handleBlur} onChange={handleChange}/>
                {errors.batch && touched.batch ? <div style={{color:"red"}}>{errors.batch}</div>:null}
              </Form.Group>
    
              <Button variant="primary" type='submit'>
                Submit
              </Button>
            </Form>
          )}
        </Formik>
     </div>
    </div>
  </>
}

export default Edit