import {configureStore  } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import authSlice from "./auth-slice";

const Store = configureStore({
    reducer:{
        cart: cartSlice.reducer, auth:authSlice.reducer,
    }
    
})
export default Store