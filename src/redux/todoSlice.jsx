import { createSlice } from "@reduxjs/toolkit";
export const todoSlice = createSlice({
    name:'todo',
    initialState:[{
                id:0,
                task:"Learn React Redux",
                status:true
            },
            {   
                id:1,
                task:"Implement React Redux",
                status:false
            }
        ],
    reducers:{
        add:(state,action)=>{
            let id = state[state.length-1].id + 1 
            action.payload.id = id
            state.push(action.payload)
        },
        toggle:(state,action)=>{
            let id = action.payload
            state.forEach(e => {
                if(e.id===id)
                {
                    e.status = !e.status
                }
            });
        }
    }

})
export const {add,toggle} = todoSlice.actions
export default todoSlice.reducer