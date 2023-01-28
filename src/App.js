import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Login from "./pages/Login";
import Info from "./pages/Info";
import Currency from "./pages/Currency";

function App() {
  return (
    <div>
       <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/info' element={<Info />} />
        <Route path='/currency' element={<Currency />} />
      </Routes>
      </div>
  );
}

export default App;
