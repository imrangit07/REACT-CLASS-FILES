import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todoApp",
    initialState: {
        Todo: []
    },
    reducers: {
        addTodo: (state, actions) => {
            state.Todo.push(actions.payload);
        },
        deleteTodo: (state, actions) => {

            // using splice
            state.Todo.splice(actions.payload, 1);

            // using id
            // state.Todo = state.Todo.filter((todos) => todos.id !== actions.payload);
        },
        compliteTodo: (state, actions) => {
            let compId = state.Todo.find((key) => key.id == actions.payload);
            compId.complited = true;
        },
        inCompliteTodo: (state, actions) => {
            let compId = state.Todo.find((key) => key.id == actions.payload);
            compId.complited = false;
        }
    }
})

export const { addTodo, deleteTodo, compliteTodo, inCompliteTodo } = todoSlice.actions;
export default todoSlice.reducer;