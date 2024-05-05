import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    list: JSON.parse(window.localStorage.getItem("todos")) || [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.list.push(action.payload);
      window.localStorage.setItem("todos", JSON.stringify(state.list));
    },
    deleteTodo: (state, action) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
      window.localStorage.setItem("todos", JSON.stringify(state.list));
    },
    toggleTodo: (state, action) => {
      const todo = state.list.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        window.localStorage.setItem("todos", JSON.stringify(state.list));
      }
    },
    toggleDetails: (state, action) => {
      const todo = state.list.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.showDetails = !todo.showDetails;
        window.localStorage.setItem("todos", JSON.stringify(state.list));
      }
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo, toggleDetails } =
  todoSlice.actions;
export default todoSlice.reducer;
