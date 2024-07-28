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
}
})

export const {toggleMenu}=appSlice.actions;
export default appSlice.reducer;