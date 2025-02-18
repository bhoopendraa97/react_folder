
   import axios from "axios";
import { useState,useEffect } from "react";
const Display=()=>{
const [mydata,setMydata]=useState([]);

const loadData=()=>{
    let api="http://localhost:3000/student";
    axios.get(api).then((res)=>{
       console.log(res.data)
       setMydata(res.data);
    }).catch((err)=>{
           console.log(err);

       });
}
useEffect(()=>{
  loadData();

},[]);

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
})
return(
<>
<h1>Display Data!!</h1>
    <table border="4" bgcolor="yellow">
        <tr>
        <th bgcolor="pink">Rollno</th>
        <th bgcolor="pink">Name</th>
        <th bgcolor="pink">City</th>
        <th bgcolor="pink">Fees</th>
        </tr>
        {ans}
    </table>
</>
)
}
export default Display;   





















