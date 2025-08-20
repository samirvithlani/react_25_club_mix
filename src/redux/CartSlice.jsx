import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    //action reducers
    name:"cart",
    
    initialState:{
        cart:[]
    },
    
    reducers:{
        //state  -->initial state
        //action --> type,payload
        addToCart:(state,action)=>{

            //state -->cart
            console.log("add to cart action called...")
            console.log("state.cart",state.cart)
            console.log("action",action)
            state.cart.push(action.payload)

        },
        //remvove,
    }
})
export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer