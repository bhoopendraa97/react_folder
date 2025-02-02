
import { useContext, useState } from "react";
import {myloginContext}  from "./LoginContext";
const UnAuthApp=()=>{
  const [urm,setUrm]=useState("");
  const {login} =useContext(myloginContext);
    return(
    <>
    <h1>Unth App Data</h1>
    Enter Name: <input type="text" value={urm}
    onChange={(e)=>{setUrm(e.target.value)}}/>
    <button onClick={()=>{login(urm)}}>Login</button>
    
    </>
    )
    
    
    }
    export default UnAuthApp;