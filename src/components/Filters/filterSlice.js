
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  status: "All",
  priority: [],
}
const filterSlice= createSlice({

  name: "filters",
  initialState,
    /**
     * Với redux toolskit, khi tạo các hàm update, thì sẽ tự độngt ạo ra cho các key action
     * Với form là 
     * {
     * type: 'name: "filters"/ và tên hàm searchTodo
     * 
     * }
     * kết quả cho ra: type: filters/searchTodo
     * 
     * Với redux toolkit,
     * không cần phải copy lại 1 object mới
     * mà sẽ viết thẳng
     * Ví dụ redux core
     * case "filters/searchTodo":
          return {
            ...state,
            search: action.payload,
          };
        Với redux toolskit
        state.search = action.payload
     */
  reducers: {
    searchTodo: (state,action)=>{
      state.search = action.payload
    },
    statusSearchTodo: (state,action)=>{
      state.status = action.payload
    },
    prioritySearchTodo: (state,action)=>{
      state.priority = action.payload
    },
 
  
  },
});
export const { searchTodo, statusSearchTodo, prioritySearchTodo} = filterSlice.actions
export default filterSlice.reducer
