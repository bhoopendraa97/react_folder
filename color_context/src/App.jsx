   import { useContext } from "react";
import { mycontext } from "./ColorContext";
const App=()=>{
    const {color, setColor}=useContext(mycontext);
    return(
        <>
      <h1>welcome to my App!!</h1>
<div style={{width:"400px", height:"400px",border:"2px solid black",backgroundColor:color}}>
<button onClick={()=>{setColor("blue")}}>click here!!</button>
</div>
        </>
    )
}
export default App;   






