

 import { useContext } from "react";
import { myContext } from "./App";
const Comp5=()=>{
  const{ name}=useContext(myContext);
  return(
   <>
  <h1>Component-5:</h1>
  <h1>Hello my name is: {name}</h1>
  </>
  )
}
export default Comp5;  

