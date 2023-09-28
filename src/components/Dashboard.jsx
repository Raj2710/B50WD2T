import React,{useContext} from 'react'
import Tile from './Tile'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { UserDataContext } from './context/UserContext';
import { DashboardDataContext } from './context/DashboardContext';
import UseLogout from './Hooks/UseLogout'
function Dashboard() {
    
    let {dashboardData} = useContext(DashboardDataContext)
    let {data,setData} = useContext(UserDataContext)
    let logout = UseLogout()

    const navigate = useNavigate()

    let handleDelete = (index)=>{
        let newArray = [...data]//deep copy
        newArray.splice(index,1)
        setData(newArray)
    }

  return <>
    <div className="container-fluid">
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        <button className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        onClick={logout}>Logout</button>
    </div>

    <div className="row">
       {
        dashboardData.map((e,i)=>{
            return <Tile color={e.color}
                         icon={e.icon}
                         title={e.title}
                         value={e.value}
                         isProgress={e.isProgress}

                         key={i}
                        />
        })
       }
    </div>

    <div className='row'>
       <Table striped bordered hover>
       <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Batch</th>
          <th>Action</th>
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
                    <td>
                        <Button variant='primary' onClick={()=>{
                            navigate(`/edit/${i}`)
                        }}>Edit</Button>
                        &nbsp;
                        &nbsp;
                        <Button variant='danger' onClick={()=>handleDelete(i)}>Delete</Button>
                    </td>
                </tr>
            })
        }
      </tbody>
       </Table>
    </div> 
    </div>
  </>
}

export default Dashboard