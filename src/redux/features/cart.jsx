
import { createSlice } from "@reduxjs/toolkit";

const initialState={
    items:[]

}   
 console.log(initialState)
const cartslice= createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart: (state, action) => {
        state.items=[...state.items, action.payload]  
     console.log(state.items)   
        },
        deletcart:(state, action)=>{
            state.items = state.items.filter((item) => item.id !== action.payload);

        }
      
    }
})

export const {addToCart, deletcart}=cartslice.actions
export default cartslice.reducer;