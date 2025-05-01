import { configureStore } from "@reduxjs/toolkit"
import myReducer from './countSlice';


const store = configureStore({
    reducer:{
        myCount:myReducer
    }
})

export default store;