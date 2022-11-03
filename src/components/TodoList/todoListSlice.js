import { createSlice } from "@reduxjs/toolkit";

const todoListSlice = createSlice({
  name: "todoList",
  initialState: [
    // { id: 1, name: "Learn Redux", completed: false, priority: "High" },
    // { id: 2, name: "Learn JavaScript", completed: true, priority: "Medium" },
    // { id: 3, name: "Learn Python", completed: false, priority: "Low" },
  ],
  reducers: {
    // function update actions
    addTodoList: (state, action) => {
      state.push(action.payload);
    },
    toggleCheckbox: (state, action) => {
      const currentTodo = state.find((todo) => todo.id === action.payload);
      currentTodo.completed = !currentTodo.completed;
    },
  },
});
export const { addTodoList, toggleCheckbox } = todoListSlice.actions;
export default todoListSlice.reducer;
