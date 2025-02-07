

import {myContext} from "./UserContext";
import { useContext } from "react";
const Cybrom=()=>{
 const {user,setUser}=useContext(myContext)

return(
<>
<h1>Cybrom page!!:{user}</h1>
<button onClick={()=>{setUser("sachin")}}>click!!</button>

</>
)
}
export default Cybrom;  




