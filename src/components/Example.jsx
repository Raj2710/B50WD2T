import React, { useRef,useReducer, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
const initialState = {
    name:"",
    email:"",
    password:""
}
const ACTIONS = {
    ADD:'ADD',
    RESET:'RESET'
}
function reducer(state,action){
    switch(action.type)
    {
        case ACTIONS.ADD:{
            return {...state,
                name:action.payload.name,
                email:action.payload.email,
                password:action.payload.password
            }
        }
        case  ACTIONS.RESET:{
            ref1.current.value = ""
            ref2.current.value = ""
            ref3.current.value = ""
            return {
                ...initialState
            }
        }
    }
}

function Example() {
    const ref1 = useRef()
    const ref2 = useRef()
    const ref3 = useRef()

    const [state,dispatch] = useReducer(reducer,initialState)

    useEffect(()=>{
        console.log("Component Rerendered")
    })

  return <div className='container-fluid'>
    <Form onSubmit={(e)=>{
        e.preventDefault()
         dispatch({type:ACTIONS.ADD,payload:{
            name:ref1.current.value,
            email:ref2.current.value,
            password:ref3.current.value
        }})
    }}>
        <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type='text' placeholder='Enter Name' ref={ref1}/>
        </Form.Group>

        <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type='text' placeholder='Enter Email' ref={ref2}/>
        </Form.Group>

        <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Enter Password' ref={ref3}/>
        </Form.Group>

        <Button type='submit'>Submit</Button>
    </Form>

    <div>
        The values are:<br/>
        Name:<b>{state.name}</b><br/>
        Email:<b>{state.email}</b><br/>
        Password:<b>{state.password}</b><br/>
    </div>
  </div>
}

export default Example