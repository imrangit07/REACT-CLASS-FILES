import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../Slice/CountSlice.jsx"
const store = configureStore({
    reducer:{
        counter:counterSlice
    }
})

export default store;