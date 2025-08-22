import { createSlice } from "@reduxjs/toolkit"
import reducer from "./CartSlice"

const initialState = {
    balance: 0
}

const bankSlice = createSlice({
    name:"bank",
    initialState,
    reducers:{
        depositAction:(state,action)=>{
            state.balance = state.balance + action.payload
        }
    }
})
export const {depositAction} = bankSlice.actions
export default bankSlice.reducer