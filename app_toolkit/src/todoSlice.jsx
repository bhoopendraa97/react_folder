
 /* import { createSlice } from "@reduxjs/toolkit";
const todoSlice=createSlice({

     name: "todo",
     initialState:{
         task:[]
     },
     reducers:{
      addTask:(state,actions)=>{
       state.task.push(actions.payload);
      }
        
    }     

})
export const {addTask}=todoSlice.actions;
export default todoSlice.reducer;  */

import { createSlice } from "@reduxjs/toolkit";

const todoSlice=createSlice({
name:"mytodo",

initialState:{
    task:[]
},

reducers:{
addtask:(state,actions)=>{
    state.task.push(actions.payload)
} 
}
})
export const {addtask}=todoSlice.actions;
export default todoSlice.reducer


