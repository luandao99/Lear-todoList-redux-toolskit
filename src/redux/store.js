import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "../components/Filters/filterSlice";
import todoListSlice from "../components/TodoList/todoListSlice";
const store = configureStore({
  reducer: {
    filters: filterSlice,
    todoList: todoListSlice,
  },
});
export default store;
