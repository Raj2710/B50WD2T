import React,{useEffect, useRef, useState} from 'react'
import { Button } from 'react-bootstrap'

function UseRef() {
    let count = useRef(0)
    let [name,setName] = useState("")
    let ref1 = useRef()
    let ref2 = useRef()
    let ref3 = useRef()
    let ref4 = useRef()

    useEffect(()=>{
        count.current += 1
    })

    useEffect(()=>{
        ref1.current.focus()
    },[])

    const handleSubmit = ()=>{
        const otp = `${ref1.current.value}${ref2.current.value}${ref3.current.value}${ref4.current.value}`
        if(otp.length===4)
            alert(`Entered OTP is ${otp}`)
        else
        {
            alert("Invalid OTP")
            ref1.current.value=""
            ref2.current.value=""
            ref3.current.value=""
            ref4.current.value=""
            ref1.current.focus()
        }
    }
  return <>
   <div className="container-fluid">
     <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">UseRef</h1>
    </div>
    <input type='text' onChange={(e)=>setName(e.target.value)}/>
    <h2>Name is : {name}</h2>
    <h3>Component rendered {count.current} </h3>
    <br/>
    <h2>Enter OTP</h2>
    <div>
        <input type='text' ref={ref1} onChange={()=>ref2.current.focus()}/>
        <input type='text' ref={ref2} onChange={()=>ref3.current.focus()}/>
        <input type='text' ref={ref3} onChange={()=>ref4.current.focus()}/>
        <input type='text' ref={ref4} onChange={()=>setTimeout(()=>handleSubmit(),1000)}/>

        <Button variant='primary' onClick={()=>handleSubmit()}>Submit</Button>
    </div>
    </div>
  </>
}

export default UseRef