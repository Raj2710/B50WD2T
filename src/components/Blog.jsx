import React, { useEffect, useState } from 'react'
import BlogTile from './common/BlogTile'
import { useParams } from 'react-router-dom'
import useLogout from '../hooks/useLogout'
import {toast} from 'react-toastify'
import AxiosService from '../utils/ApiService'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function Blog() {
  let logout = useLogout()
  let userData = JSON.parse(sessionStorage.getItem('userData'))
  return <>
    <div>
      {
        userData.role==='admin'?<AdminBlog/>:<EditBlog/>
      }
      
    </div>
  </>
}
function EditBlog(){
  let params = useParams()
  let [title,setTitle] = useState("")
  let [imageUrl,setImage] = useState("")
  let [description,setDescription] = useState("")
  let [blog,setBlog] = useState({})
  let navigate = useNavigate()
  let getBlog = async()=>{
    try {
      let res = await AxiosService.get(`/blogs/${params.id}`)
      if(res.status===200)
      {
          setTitle(res.data.blog.title)
          setImage(res.data.blog.imageUrl)
          setDescription(res.data.blog.description)
          setBlog(res.data.blog)
      }
    } catch (error) {
      toast.error(error.response.data.message)
      if(error.response.status===401)
      {
        logout()
      }
    }
  }

  useEffect(()=>{
    if(params.id)
    {
      getBlog()
    }
    else
    {
      logout()
    }
  },[])
  let editblog = async()=>{
    try {
      let res = await AxiosService.put(`/blogs/edit/${blog._id}`,{
        title,imageUrl,description
      })
      if(res.status===200)
      {
        toast.success(res.data.message)
        navigate('/dashboard')
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message)
      if(error.response.status===401)
      {
        logout()
      }
    }
  }
  return <>
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" value={title} placeholder="Enter Title"  onChange={(e)=>setTitle(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Image Url</Form.Label>
        <Form.Control type="text" value={imageUrl} placeholder="Image Url"  onChange={(e)=>setImage(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" value={description} placeholder="Description" style={{ height: '100px' }} onChange={(e)=>setDescription(e.target.value)}/>
      </Form.Group>

        <h2 style={{textAlign:"center"}}>Preview</h2>
        <div className='blogs-wrapper'>
          <BlogTile blog={{title,imageUrl,description}}/>
        </div>
      <div style={{textAlign:"center"}}>
        <Button variant="primary" onClick={()=>editblog()}>
          Submit
        </Button>
        &nbsp;
        <Button variant='warning' onClick={()=>navigate('/dashboard')}>Cancel</Button>
      </div>
    </Form>
  </>
}

function AdminBlog(){
  let params = useParams()
  let [blog,setBlog] = useState({})
  let getBlog = async()=>{
    try {
      let res = await AxiosService.get(`/blogs/${params.id}`)
      if(res.status===200)
      {
          setBlog(res.data.blog)
      }
    } catch (error) {
      toast.error(error.response.data.message)
      if(error.response.status===401)
      {
        logout()
      }
    }
  }

  useEffect(()=>{
    if(params.id)
    {
      getBlog()
    }
    else
    {
      logout()
    }
  },[])

  let changeStatus = async(status)=>{
    try {
      let res = await AxiosService.put(`/blogs/status/${blog._id}/${status}`)
      if(res.status===200)
      {
        getBlog()
      }
    } catch (error) {
      toast.error(error.response.data.message)
      if(error.response.status===401)
      {
        logout()
      }
    }
  }
  return <div>
    <div className='blogs-wrapper'><BlogTile blog={blog}/></div>
    <div style={{textAlign:"center"}}>
     {
       blog.status!=='pending'?<Button variant='warning' onClick={()=>changeStatus("pending")}>Pending</Button>:<></>
     }
     &nbsp;
     {
      blog.status!=='approved'?<Button variant='success' onClick={()=>changeStatus("approved")}>Approve</Button>:<></>
     }
     &nbsp;
     {
      blog.status!=='rejected'?<Button variant='danger' onClick={()=>changeStatus("rejected")}>Reject</Button>:<></>
     }
    </div>
  </div>
}
export default Blog