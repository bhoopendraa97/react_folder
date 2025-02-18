
import { Link,Outlet } from "react-router-dom";
const Layout=()=>{
return(
<>
    <Link to="home">Home</Link>
    <Link to="insert">Insert</Link>
    <Link to="display" >Display</Link>
    <Link to="search">Search</Link>
    <Link to="update">Update</Link>
    <Link to="editdata">EditData</Link>

    <hr size="4" color="red" />
    <Outlet/>
     <hr size="4" color="red" />
     www.my company
</>
)
}
export default Layout;