
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home/";
import Service from "./pages/Service/";
import Contact from "./pages/Contact/";
import About from "./pages/About";
import AboutProduct from "./pages/AboutProduct/";
import AboutCompany from "./pages/AboutCompany/";
import AboutServices from "./pages/AboutServices/";


const App=()=>{
return(
<>
<BrowserRouter>
<Routes>
<Route path="/" element={<Layout/>} >
<Route path="home" element={<Home/>}/>
<Route path="service" element={<Service/>}/>
<Route path="contact" element={<Contact/>}/>
<Route path="about" element={<About/>}>
<Route path="aboutcompany" element={<AboutCompany/>}/>
<Route path="aboutservices" element={<AboutServices/>}/>
<Route path="aboutproduct" element={<AboutProduct/>}/>
</Route>
</Route>
</Routes>
</BrowserRouter>
</>
    )
  }
export default App;








