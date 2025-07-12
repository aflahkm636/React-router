import { Routes, Route } from "react-router-dom";
import Register from "./components/registration";
import Login from "./components/login";
import Home from "./components/home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/home" element={<Home/>} />
    </Routes>
  );
}

export default App;

