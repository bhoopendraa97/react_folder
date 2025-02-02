 import { createContext, useState } from "react";
const myloginContext=createContext();

const LoginContext=({children})=>{
const [user,setUser]=useState({name:"", auth:false});

const login=(usernm)=>{
   setUser({name:usernm,auth:true});
}
const logout=()=>{
   setUser({name:"",auth:false})
}
return(
<>
<myloginContext.Provider value={{user,login,logout}}>
{children}
</myloginContext.Provider>
</>
)
}
export default LoginContext;
export {myloginContext};      













