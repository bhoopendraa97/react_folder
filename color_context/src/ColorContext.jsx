 import { useState, createContext } from "react";
const mycontext=createContext();

const ColorContext=({children})=>{
const [color, setColor]=useState("pink");
    return(
        <>
        <mycontext.Provider value={{color, setColor}}>
            {children}
        </mycontext.Provider>
        </>
    )
}
export default ColorContext;
export {mycontext};   





