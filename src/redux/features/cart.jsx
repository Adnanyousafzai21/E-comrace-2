
import { createSlice } from "@reduxjs/toolkit";

const initialState={
    items:[]

}   
//  console.log(initialState.items)
const cartslice= createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart: (state, action) => {
        state.items=[...state.items, action.payload]  
        
        }
      
    }
})

export const {addToCart}=cartslice.actions
export default cartslice.reducer;