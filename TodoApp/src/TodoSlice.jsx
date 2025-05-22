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
            compId.completed = true;
        },
        inCompliteTodo: (state, actions) => {
            let compId = state.Todo.find((key) => key.id == actions.payload);
            compId.completed = false;
        },
        updateTodo: (state, actions) => {
            const { id, newTodo } = actions.payload;
            console.log(id);
            console.log(newTodo);

            const compIndex = state.Todo.findIndex((key) => key.id == id);

            if (compIndex !== -1) {
                state.Todo[compIndex] = {
                    todo: newTodo,
                };
            }

        }
    }
})

export const { addTodo, deleteTodo, compliteTodo, inCompliteTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;