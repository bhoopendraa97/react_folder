
 import { useState } from "react";
import Comp1 from "./Comp1";
const App=()=>{

const [name,setName]=useState("raj")

return(
<>
<h1>welcome To my App:{name}</h1>

<Comp1 name={name}  />
</>
)
}
export default App;  













