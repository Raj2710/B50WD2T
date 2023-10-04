import React,{useCallback,useState,useEffect} from 'react'
import { Table,Button } from 'react-bootstrap'
import axios from 'axios'
import {toast} from 'react-toastify'
function FetchUser() {
    const [theme,setTheme] = useState(true)

  return <div className='container-fluid'>
    <Button onClick={()=>{setTheme(!theme)}}>{theme?'Light':'Dark'}</Button>
    <DisplayUser theme={theme} setTheme={setTheme}/>
  </div>
}

function DisplayUser({theme,setTheme}){
    const [data,setData]=useState([])
    const getData = useCallback(async()=>{
        try {
         let res = await axios.get('https://6486a3c8beba6297278efd7e.mockapi.io/users')
         if(res.status===200)
         {
           // toast.success("User Data Fetched")
           setData(res.data)
         }
        } catch (error) {
           toast.error("Internal Server Error")
        }
       },[data])

       useEffect(()=>{
        if(theme){
            getData()
        }
       },[theme])

       let handleDelete = async(id,index)=>{
        let newArray = [...data]
        newArray.splice(index,1)
        setData(newArray)
         try {
            let res = await axios.delete(`${'https://6486a3c8beba6297278efd7e.mockapi.io/users'}/${id}`)
            if(res.status===200)
            {
              toast.success("Data Deleted Successfully")
            }
         } catch (error) {
            console.log(error)
          toast.error("Error Occoured")
         }
      }
       
    return <>
        <Table striped bordered hover={theme}>
       <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Batch</th>
        </tr>
      </thead>
      <tbody>
        {
            data.map((e,i)=>{
                return <tr key={i}>
                    <td>{i+1}</td>
                    <td>{e.name}</td>
                    <td>{e.username}</td>
                    <td>{e.email}</td>
                    <td>{e.mobile}</td>
                    <td>{e.batch}</td>
                    <td><Button variant='danger' onClick={()=>handleDelete(e.id,i)}>Delete</Button></td>
                </tr>
            })
        }
      </tbody>
       </Table>
    </>
}

export default FetchUser