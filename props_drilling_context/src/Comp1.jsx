
import Comp2 from "./Comp2";
const Comp1=({name})=>{
    return(
     <>
     <h1>component-1</h1>
     <Comp2 name={name}/>
     </>
    )  
}
export default Comp1;


