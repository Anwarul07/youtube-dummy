import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
name:"app",
initialState:{
    IsOpen:true,
},
reducers:{
    toggleMenu:(state)=>{
        state.IsOpen=!state.IsOpen;
    },
    closeMenu:(state)=>{
        state.IsOpen= false;
    },
}
})

export const {toggleMenu, closeMenu}=appSlice.actions;
export default appSlice.reducer;