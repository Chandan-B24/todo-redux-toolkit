import { createSlice,PayloadAction } from "@reduxjs/toolkit";



const todoSlice = createSlice({
    name : 'todo',
    initialState : [],
    reducers : {
        addTodo(state:any,action:PayloadAction<string>){
            state.push(action.payload)
        },
        removeTodo(state,action:PayloadAction<number>){
            state.splice(action.payload,1);
        }
    }
})




export default todoSlice.reducer
export const {addTodo,removeTodo} = todoSlice.actions