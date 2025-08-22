import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./redux/CartSlice"
import bankReducer from "./redux/BankSlice"
import contentReducer from "./redux/ContentSlice"
export const store = configureStore({
    //reducers
    reducer:{
        cart:cartReducer,
        bank:bankReducer,
        content:contentReducer
    }
})