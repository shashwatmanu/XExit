import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router";
import Login from './Pages/Login';
import Register from './Pages/Register';
import Main from './Components/Main';
import Admin from './Pages/Admin';
import Employee from './Pages/Employee';

function App() {
  return (
   <>
<BrowserRouter>
    <Routes>
    <Route
          exact path="/"
          element={<Main adminView={Admin} employeeView={Employee} />}
        />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      
    </Routes>
  </BrowserRouter>
   </>
  );
}

export default App;
