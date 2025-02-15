
 /*   import { useState,useEffect } from "react";
const App=()=>{
 const [count,setCount]=useState(0);
 const [multi,setmulti]=useState(0);
 
 useEffect(()=>{
  setmulti(count*2);
 },[count])
 return(
<>
<h1>My app:{count}</h1>
<h2>Multiplication:{multi}</h2>
<button onClick={()=>{setCount(count+1)}}>click here!</button>
</>
 )
}
export default App;   */


 /* import { useState } from "react";
const App=()=>{
//const [name,setName]=useState("");
//const [city,setCity]=useState("");
//const[fees,setFees]=useState("");

const[input,setInput]=useState({});

const handleInput=(e)=>{
  let name=e.target.name;
  let value=e.target.value;
  setInput(values=>({...values,[name]:value}))
  console.log(input)
}
return(
<>
Enter Name: <input type="text" name="student" onChange={handleInput}/>
<br /><br />
Enter City: <input type="text" name="city" onChange={handleInput}/>
<br /><br />
Enter fees: <input type="text" name="fees" onChange={handleInput}/>
<br /><br />
</>
)
}
export default App;  */

/*  import { useState } from "react";
const App=()=>{
const [cnt,setCnt]=useState(0);

const inc=()=>{
setCnt(cnt+1)
}

const Dec=()=>{
setCnt(cnt-1)
if(0>=cnt){
  alert("not less then zero")
}
}

return(
<>
<h1>my number:{cnt}</h1>
<button onClick={inc}>incriment</button>
 <br /><br />
<button onClick={Dec}>decrement</button>
</>
)
}
export default App;  */





















