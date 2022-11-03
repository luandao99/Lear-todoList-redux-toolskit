import { createSelector } from "@reduxjs/toolkit";

const todoList = (state) => state.todoList;
const searchTodo = (state) => state.filters.search;
const statusTodo = (state) => state.filters.status;
const priorityTodo = (state) => state.filters.priority;
export const todoRemainingSelector = createSelector(
  todoList,
  searchTodo,
  statusTodo,
  priorityTodo,
  (todoList, search, status, priority) => {
    // return todoList.filter((todo)=>{
    //     return todo.name.includes(search)
    // })
    return todoList.filter((todo) => {
      if (status === "All") {
        return priority.length
          ? todo.name.includes(search) && priority.includes(todo.priority)
          : todo.name.includes(search);
      }
      return (
        todo.name.includes(search) &&
        (status === "Completed" ? todo.completed : !todo.completed) &&
        (priority.length ? priority.includes(todo.priority) : true)
      );
    });
  }
);
