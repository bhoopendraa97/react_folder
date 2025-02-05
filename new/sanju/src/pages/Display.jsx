

import { useState,useEffect } from "react";
import axios from "axios";

const Display=()=>{
   const [mydata,setMydata]=useState([]);
   const loadData=()=>{
      let api="http://localhost:3000/student";
      axios.get(api).then((res)=>{
        console.log(res.data)
        setMydata(res.data)
      }).catch((err)=>{
        console.log(err)
      })
   }

useEffect(()=>{
loadData()

},[])

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
    <h1>My Display Pages!!</h1>
      <table border="4">
       <tr bgcolor="green">
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
    export default Display;







