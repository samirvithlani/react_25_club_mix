import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./redux/UserSlice"
export const mystore = configureStore({
    reducer:{
        user:userReducer
    }
})