import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Navar from './components/Navar';
import ProtectedRoutes from "./protected/ProtectedRoutes"
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
function App() {
  return (
    <>
    <Navar></Navar>
    <Routes>
         <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<ProtectedRoutes Components={Home} />}></Route>
        <Route path="/cart" element={<ProtectedRoutes Components={Cart} />}></Route>
        <Route path="/ProductDetails/:productid" element={<ProtectedRoutes Components={ProductDetails} />}></Route>
       </Routes>
    </>
    
  );
}

export default App;
