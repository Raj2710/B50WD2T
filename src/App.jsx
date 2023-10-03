import { useEffect, useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {add,toggle} from './redux/todoSlice'
function App() {
  let todo =  useSelector((state)=>state.todo)
  let [page,setPage] = useState(0)
  let [task,setTask] = useState("")
  let [filteredToDo,setFilteredTodo] = useState(todo)
  let dispatch = useDispatch()

  const createTask = ()=>{
    let payload = {
      task,
      status:false
    }
    console.log(payload)
    dispatch(add(payload))
  }

  const toggleTask = (i)=>{
    dispatch(toggle(i))
  }

  useEffect(()=>{
    if(page===0)
    {
      setFilteredTodo(todo)
    }
    else if(page===1)
    {
      setFilteredTodo(todo.filter((e=>!e.status)))
    }
    else if(page===2)
    {
      setFilteredTodo(todo.filter((e=>e.status)))
    }
  },[page,todo])

  return <>
    <div className="container-fluid">
        <h1 className="heading">Todo Item's</h1>
        <div className="todo-wrapper">
            <div className='create-todo'>
            <input type='text' className='create-input' placeholder='Enter your Todo' onChange={(e)=>setTask(e.target.value)}/>
            <button className='btn btn-primary' onClick={()=>createTask()}>Create</button>
            </div>
            <div className="todo-tabs">
              <ul>
                  <li className={page===0?"active":""} onClick={()=>{
                    setPage(0)
                  }}>All</li>
                  <li className={page===1?"active":""} onClick={()=>{
                    setPage(1)
                  }}>Pending</li>
                  <li className={page===2?"active":""} onClick={()=>{
                    setPage(2)
                  }}>Completed</li>
              </ul>
            </div>
            <div className="todo-items">
                <ul>
                  {
                    filteredToDo
                    .map((e)=>{
                      return <li key={e.id} className={e.status?"strikeout":""}> 
                          <input type='checkbox' checked={e.status} onChange={()=>toggleTask(e.id)}/>{e.task}
                        </li>
                    })
                  }
                </ul>
            </div>
        </div>
    </div>
  </>
}

export default App
