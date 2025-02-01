
 import {useSelector,useDispatch } from "react-redux";
import { changeColor } from "./colorSlice";
import { useState } from "react";
const App=()=>{
 const color=useSelector((state)=>state.mycolor.clr);
 const [mycolor,setmyColor]=useState("");
 const dispatch=useDispatch();
 const setColor=()=>{
     dispatch(changeColor({myclr:mycolor}))
 }
 return(
  <>
  <h1>change color</h1>
   Enter color:<input type="text" value={mycolor}
   onChange={(e)=>{setmyColor(e.target.value)}}/>
   <button onClick={setColor}>Click</button>
   <br /><br />
   <div style={{width:"300px",height:"300px",border:"2px solid black",backgroundColor:color}}>

        
   </div>
  </>
 )
}
export default App; 
