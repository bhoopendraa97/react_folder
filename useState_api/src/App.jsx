 /* import { useState } from "react";
const App=()=>{

const[input,setInput]=useState({});

const handleInput=(e)=>{
  let name=e.target.name;
  let value=e.target.value;
  setInput(values=>({...values,[name]:value}))
  console.log(input)

}
const handleSubmit=()=>{
console.log(input);
}

return(
<>
<h1>My Application From!!</h1>
Enter Name: <input type="text" name="student" onChange={handleInput}/>
<br /><br />
Enter City: <input type="text" name="city" onChange={handleInput}/>
<br /><br />
Enter fees: <input type="text" name="fees" onChange={handleInput}/>
<br /><br />
<button onClick={handleSubmit}>submit!!</button>

</>
)
}
export default App;   */


import { useState,useEffect } from "react";
import axios from "axios";
const App=()=>{
const [mydata,setMydata]=useState([]);
const loadData=()=>{
   let api="http://localhost:3000/student";
   axios.get(api).then((res)=>{
     setMydata(res.data);
     console.log(res.data);
   })
}
const ans=mydata.map((key)=>{
   return(
   <>
    <tr>
   <td>{key.rollno}</td>
   <td>{key.name}</td>
   <td>{key.city}</td>
   <td>{key.fees}</td>
    </tr>
   </>
   )
});

useEffect(()=>{
  loadData();
  
  },[]);

return(
  <>
  <h1>Display</h1>
   <button onClick={loadData}>save data!!</button>
  <hr />  
  <table border="4" width="100px">
       <tr>
    <th>Rollno</th>
    <th>Name</th>
    <th>City</th>   
    <th>Fees</th>
       </tr>
         {ans}
       </table>
           </>
        )
         }
  export default App;   



























