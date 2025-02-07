 import { useState,createContext} from "react";
const myContext=createContext();

const  userContext=({children})=>{

    const [user,setUser]=useState("raj");
return(
<>
<myContext.Provider value={{user,setUser}}>
      {children}
</myContext.Provider>
</>
)
}
export default userContext;
export {myContext};    


