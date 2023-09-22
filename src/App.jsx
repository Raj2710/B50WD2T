import { useState } from "react"
import Sidebar from "./components/Sidebar"
import Dashboard from "./components/Dashboard"
import Create from "./components/Create"
import Edit from "./components/Edit"
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  let [data,setData] = useState([
    {
      name:"Ajith",
      username:"ajith123",
      email:"ajith@gmail.com",
      mobile:"12345678",
      batch:"B100",
    },
    {
      name:"Kumar",
      username:"kum2710",
      email:"kumar@gmail.com",
      mobile:"098765431",
      batch:"B101",
    }
  ])
  return <>
    <div id='wrapper'>
      <BrowserRouter>
        <Sidebar/>
        <Routes>
            <Route path='/dashboard' element={<Dashboard data={data} setData={setData}/>}/>
            <Route path='/create' element={<Create data={data} setData={setData}/>}/>
            <Route path='/edit' element={<Edit/>}/>
        </Routes>
      </BrowserRouter>
       
    </div>
  </>
}

export default App