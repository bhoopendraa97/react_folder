

import Home from "./pages/Home";
import Layout from "./Layout";
import About from "./pages/About";
import Service from "./pages/Service";
import Login from "./pages/Login";
import AboutCompany from "./pages/AboutCompany";


import { BrowserRouter,Routes,Route } from "react-router-dom";
const App=()=>{
return(
<>
  <BrowserRouter>
    <Routes>
   <Route path="/" element={<Layout/>}>
     <Route path="index" element={<Home/>}/>
     <Route path="home" element={<Home/>}/>
     <Route path="about" element={<About/>}/>
     <Route path="service" element={<Service/>}/>
     <Route path="login"  element={<Login/>}/>
     <Route path="abtcompany/:cname" element={<AboutCompany/>}/>
   </Route>
    </Routes>
  </BrowserRouter>

</>
)


}
export default App;

