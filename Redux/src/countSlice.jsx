import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:"myCount",
    initialState:{
        count:0,
        color:"red",
        name:"Arman"
    },
    reducers:{
        increment:(state)=>{
            state.count++;
        },
        decrement:(state)=>{
            state.count--;
        },
        changebg:(state)=>{
            state.color="green";
        },
        changeName:(state)=>{
            state.name="Imran Hussain"
        }
    }
})

export const {increment,decrement,changebg,changeName} = counterSlice.actions;
export default counterSlice.reducer;