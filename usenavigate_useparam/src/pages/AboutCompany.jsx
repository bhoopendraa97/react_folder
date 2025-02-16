
/* import { useParams } from "react-router-dom";
const AboutCompany=()=>{
  const {cname} = useParams();
    return(
    <>
    <h1>Hello my company name is:{cname}</h1>
    
    </>
    )
    }
    export default AboutCompany;  */

import { useParams } from "react-router-dom";
const AboutCompany=()=>{
  const {cname}=useParams()
  return(
<>

<h1>Hello my company name is:{cname}</h1>

</>

  )
}
export default AboutCompany;








