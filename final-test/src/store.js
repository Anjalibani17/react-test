import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./Todos/todoSlider";

export default configureStore({
    reducer:{
        todos: todoReducer,
    }
});