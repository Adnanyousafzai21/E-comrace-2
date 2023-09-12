import {configureStore } from "@reduxjs/toolkit"
import cartslice from "./features/cart"

const store= configureStore({
    reducer:{
        cart:cartslice
    }
})

export default store