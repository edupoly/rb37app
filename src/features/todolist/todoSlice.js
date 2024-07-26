import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    todos:['van','bus','train']
}
export const todoSlice = createSlice({
    name:"Todolist Slice",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            state.todos.push(action.payload)
        }
    }
})
export const {addTodo} = todoSlice.actions;
const todoReducer = todoSlice.reducer;
export default todoReducer;