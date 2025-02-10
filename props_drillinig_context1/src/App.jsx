

import Comp1 from "./Comp1";
import { useState } from "react";
import { createContext } from "react";

const myContext=createContext();
const App=()=>{
const [name,setName]=useState("raj")
return(
<>
<h1>my App !!:{name}</h1>
<myContext.Provider value={{name}}>

<Comp1/>
</myContext.Provider>
</>
)
}
export default App;
export {myContext};  

