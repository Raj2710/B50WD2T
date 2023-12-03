import React, { useEffect,useState } from 'react'
import config from '../utils/config'
import axios from 'axios'
import {toast} from 'react-toastify'
import Table  from 'react-bootstrap/Table';
import Button  from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
function Dashbaord() {
    let [users,setUsers] = useState([])
    let navigate = useNavigate()
    const getAllUsers = async()=>{

        try {
            let res = await axios.get(`${config.API_URL}/user`)
            if(res.status===200)
            {
                // toast.success(res.data.message)
                setUsers(res.data.users)
            }
            else
            {
                toast.error(res.data.message)
            }
        } catch (error) {
            toast.error(error.res.data.message)
        }
    }
    const handleDelete = async(id)=>{
        try {
            let res = await axios.delete(`${config.API_URL}/user/${id}`)
            if(res.status===200)
            {
                await getAllUsers()
                toast.success(res.data.message)
            }
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
    useEffect(()=>{
        getAllUsers()
    },[])
  return <>
    <Table striped bordered hover>
    <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
            users.map((e,i)=>{
                return <tr key = {i}>
                    <td>{i+1}</td>
                    <td>{e.firstName}</td>
                    <td>{e.lastName}</td>
                    <td>{e.email}</td>
                    <td>
                        <Button variant='primary' onClick={()=>navigate(`/${e._id}`)}>Edit</Button>
                        &nbsp;
                        <Button variant='danger' onClick={()=>handleDelete(e._id)}>Delete</Button>
                    </td>

                </tr>
            })
        }
    </tbody>
    </Table>
  </>
}

export default Dashbaord