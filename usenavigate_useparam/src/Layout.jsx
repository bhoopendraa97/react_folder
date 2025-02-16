

import { Link,Outlet } from "react-router-dom";
const Layout=()=>{

    return(
    
    <>
    <Link to="home">Home</Link>
    <Link to="about">About</Link>
    <Link to="service">Service</Link>
    <Link to="login">Login</Link>

    <hr size="4" color="red" />
   <Outlet/>

   <hr size="4" color="red" />
    </>
    
    
    
    )
    
    
    }
    export default Layout;

