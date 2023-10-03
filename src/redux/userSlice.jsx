import {createSlice} from "@reduxjs/toolkit"
export const userSlice = createSlice({
    name:"user",
    initialState:[
        {
            name:"naga",
            email:"naga@gmail.com"
        }
    ]
})

export default userSlice.reducer