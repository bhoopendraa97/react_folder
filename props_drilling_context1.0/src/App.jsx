
/*  import Comp1 from "./Comp1";
import { useState } from "react";
import { createContext } from "react";

const nameContext=createContext();
const App=()=>{
const [name,setName]=useState("raj")
return(
<>
<h1>my App !!:{name}</h1>
<button onClick={()=>{setName("Bhoopendra Ahirwar")}}>click here!!</button>
<h2>my Name :{name}</h2>
<nameContext.Provider value={{name,setName}}>
    <Comp1/>
</nameContext.Provider>
</>
)
}
export default App;
export {nameContext};   */

import Comp1 from "./Comp1";
import { useState,createContext } from "react";
const nameContext=createContext();

const App=()=>{
const [name,setName]=useState("raj")

return(
<>
<h1>welcome to App:{name}</h1>
<button onClick={()=>{setName("Bhopendra")}}>Click here!!</button>
  <nameContext.Provider value={{name,setName}}>
<Comp1/>
  </nameContext.Provider>
</>
)
}
export default App;
export {nameContext}











