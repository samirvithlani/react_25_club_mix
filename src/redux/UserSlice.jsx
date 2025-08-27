import { createSlice } from "@reduxjs/toolkit";

//userSLice -->action ,reducer
const userSlice = createSlice({
    name:"user",
    initialState:{
        users:[]
    },
    reducers:{
        //actions..function
        //state -->initialState data
        //action -->1)type2)payload
        //type - name/actionname == user/addUser : switch case..
        //payload object -->dispatch...
        addUser:(state,action)=>{
            // console.log("state...",state.users)
            // console.log("action...",action)
            state.users.push(action.payload)
        },
        //removeUser -- filter
    }
})

export const {addUser} = userSlice.actions //component
export default userSlice.reducer