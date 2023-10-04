import React, { useState,useContext } from 'react'
import { Form,Button } from 'react-bootstrap'
export const NotesContext = React.createContext()

function Notes() {
    let [data,setData] = useState([])

  return <div className='container-fluid'>
    <NotesContext.Provider value={{data,setData}}>
        <NotesInput/>
        <NotesDisplay/>
    </NotesContext.Provider>
    </div>
  
}

export default Notes

function NotesInput(){
    let [task,setTask] = useState("")
    let [description,setDesc] = useState("")
    let {data,setData} = useContext(NotesContext)
    return <>
    <Form onSubmit={(e)=>{
        e.preventDefault()
        let newArray = [...data]
        newArray.push({task,description})
        setData(newArray)
    }}>
    <Form.Group>
            <Form.Label>Task</Form.Label>
            <Form.Control type='text' placeholder='Enter Task' onChange={(e)=>setTask(e.target.value)}/>
        </Form.Group>

        <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control type='text' placeholder='Enter Description' onChange={(e)=>setDesc(e.target.value)}/>
        </Form.Group>

        <Button type='submit'>Create</Button>
    </Form>
    </>
}

function NotesDisplay(){
    let {data,setData} = useContext(NotesContext)
    return <>
    <h1>
        List of Tasks
    </h1>
    <div className='container-fluid'>
        {
            data.map((e,i)=>{
                return <div key={i}>
                <h1>{e.task}</h1>
                <p>{e.description}</p>
            </div>
            })
        }
    </div>
    </>
}