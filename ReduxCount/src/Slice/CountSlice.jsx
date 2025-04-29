import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name:'counter',
    initialState:{
        Value:0
    },
    reducers:{
        increment:(state)=>{
            state.Value +=1;
        },
        decrement:(state)=>{
            if(state.Value>0){
                state.Value -=1;
            }else{
                alert("no decrement after 0")
            }
        },
        reset:(state)=>{
            state.Value=0;
        },
        incByNumber:(state,action)=>{
            state.Value += Number(action.payload)
        },
    }

})

export const {increment,decrement,reset,incByNumber} = counterSlice.actions;
export default counterSlice.reducer;