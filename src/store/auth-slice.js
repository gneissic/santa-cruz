import { createSlice } from "@reduxjs/toolkit";
const initialAuthState = {
  isLoggedIn: false
};
const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
     handleLogin(state,){
        state.isLoggedIn = true
     }, 
     handleLogout(state,){
        state.isLoggedIn = false
     }, 
  },
});
export const authActions = authSlice.actions;
export default authSlice;