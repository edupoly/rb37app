import { createSlice } from "@reduxjs/toolkit";
const initialState={
    count:0
}
export const counterSlice = createSlice({
    name:"CounterSlice",
    initialState,
    reducers:{
        inc:(state,action)=>{
            state.count++;
        },
        dec:(state,action)=>{
            state.count--
        },
        reset:(state)=>{
            state.count=0
        }
    }
})
