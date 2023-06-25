import { createSlice } from '@reduxjs/toolkit'
export const todoSlider = createSlice({
    name: 'todos',

    initialState: [],

    reducers: {
        addTodo: (state, action) => {
            const todo = {
    
                title: action.payload.title,
                completed: false,

            };
            state.push(todo);


        },
        toggleComplete: (state, action) => {
            const index = state.findIndex((todo) => todo.id === action.payload.id);
            state[index].completed = action.payload.completed;
        },
        deleteTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload.id);
        },
    },
});


export const { addTodo, toggleComplete, deleteTodo } = todoSlider.actions;

export default todoSlider.reducer;