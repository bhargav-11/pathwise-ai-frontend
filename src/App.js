import "./style/style.css";
import Home from './pages/Home';
import Signin from "./pages/Signin";
import { Route,Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" index element={<Signin/>}/>
      <Route path="/home" element={<Home/>}/>
    </Routes>
    </>
  );
}

export default App;