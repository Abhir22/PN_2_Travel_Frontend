import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import { Register } from "./pages/reg/register";
import Login from "./pages/login/login";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login />} />
    </Routes>



  );
}

export default App;