
/* import { useRef } from "react";
const App=()=>{
const  myRef=useRef(); 
const changeColor=()=>{
  myRef.current.style.color = "blue";
  myRef.current.innerHTML="this is bhopal";
}
return(
<>
<h1 ref={myRef} style={{color:"red"}}>welcome to login App</h1>
<button onClick={changeColor}>click here!!</button>
</>
)
}
export default App;  */

 import { useRef } from "react";
const App=()=>{
   const myRef=useRef()
  const changeColor=()=>{
     myRef.current.style.backgroundColor="blue";
 }
  return(
<>
   <div style={{width:"200px",height:"200px",border:"2px solid black",backgroundColor:"pink"}} ref={myRef}>
   </div>
   <button onClick={changeColor}>changeColor</button>
</>
  )
}
export default App; 


/*  import { useRef } from 'react'
//console.log(myRef); // its an object which contain s a property of current
//console.log(myRef.current); // it will display BPL;

function App() {
  const myRef = useRef();
  const Change = ()=>{
    myRef.current.style.color = "red";
  }
  const size = ()=>{
    myRef.current.style.fontSize = "50px";
  }
  const bg = ()=>{
    myRef.current.style.backgroundColor = "blue";
    myRef.current.style.color = "black";
    myRef.current.style.height = "500px";
    myRef.current.style.width = "500px";
    myRef.current.style.border = "10px solid red";
    myRef.current.style.borderRadius = "50%";
    myRef.current.style.textAlign = "center";

  }
  return (
    <>
       <div style={{height:"400px",width:"400px",backgroundColor :"pink", color:"red" ,fontSize:"35px"}} ref={myRef}>
         welcome to Bhopal
       </div>
      <button onClick={Change}>Change</button>
      <button onClick={size}>FontSize</button>
      <button onClick={bg}>background</button>
    </>
  )
}
export default App;  */

















