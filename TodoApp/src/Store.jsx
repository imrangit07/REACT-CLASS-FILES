import { configureStore } from "@reduxjs/toolkit";
import todoSlice from './TodoSlice';

const store = configureStore({
    reducer: {
        todoApp: todoSlice,
    }
})

export default store