/*  import {useSelector,useDispatch } from "react-redux";
import { addTask } from "./todoSlice";
import { useState } from "react";
const App=()=>{
 const Data=useSelector((state)=>state.todo.task);
 const dispatch=useDispatch();
 const [val,setVal]=useState(" ");
 console.log(Data);

 const handleSubmit=()=>{
   dispatch(addTask({work:val}))
 }
 let sn=0;
 const ans=Data.map((key)=>{
  sn++;
  return(
  <>
   <tr>
  <td>{sn}</td>
 <td>{key.work}</td>
</tr>
  </>
 )
 })
   return(
    <>
   <h1>Welcome To Do App</h1>
  Enter task: <input type="text" value={val} onChange={(e)=>{setVal(e.target.value)}}/>
  <button onClick={handleSubmit}>Add</button>
  <hr size="5" color="red" /> 
  <table border="4" width="300px">
      <tr>
        <th>Sno</th>
        <th>Our Task</th>
      </tr>
      {ans}
  </table>
  </>
   )
  }
  export default App;   */






