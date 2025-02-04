
import EmpData from "./EmpData";
import EmpDesign from "./EmpDesign";

const ans=EmpData.map((key)=><EmpDesign
emid={key.empid}
nm={key.name}
deg={key.digination}
sal={key.salary}
/>)


const App=()=>{
    return(
<>
<table border="4">
   <tr>
   <th>EmpID</th>
   <th>Name</th> 
   <th>Digination</th>    
   <th>Salary</th>
   </tr>
     {ans}
</table>
</>
 )
}
export default App;  











