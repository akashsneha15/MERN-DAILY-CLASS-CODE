import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from './Pages/Products';
import Login from "./Pages/Login";
import Dashboard from './Pages/Dashboard';
import Register from "./Pages/Register";
import { Home } from './Pages/Home';
import NavBar from "./Components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/style.css";
import LandingPage from "./Pages/LandingPage";




const App=()=>{
  return(
  <BrowserRouter>
    <NavBar/>
    <Routes>
     <Route path="" element={<LandingPage/>}/>
     <Route path="login" element={<Login/>}/>
     <Route path="dashboard" element={<Dashboard/>}/>
     <Route path="products" element={<Products/>}/>
     <Route path="register" element={<Register/>}/>
     <Route path="home" element={<Home/>}/>
     
    </Routes>
  </BrowserRouter>
  )
}
export default App;