
import { useNavigate } from "react-router-dom";
const About=()=>{
const navigate=useNavigate();

const gotoHome=()=>{
navigate("/home");
}
const cname="Cybrom";
const goaboutCompany=()=>{
  navigate(`/abtcompany/${cname}`)
}

    return(
    <>
    <h1>This is My About Page!!</h1>
      <button onClick={gotoHome}>click</button>
      <button onClick={goaboutCompany}>click!!</button>
    </>
    )
    
    }
    export default About;