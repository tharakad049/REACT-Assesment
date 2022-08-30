import React, {useState} from "react";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
import PrivateRoute from "../privateRoute";
import UserForm from "../pages/User";
import Product from "../pages/Product Manage";

function App() {

    const [isLogged, setIsLogged] = useState(false);
    const changeState=()=>{
        setIsLogged(true)
    }

  return (
      <Router>
          <Routes>
              <Route path="/" element={<Login setLogged={changeState}/>}/>
              <Route element={<PrivateRoute  isLogged={isLogged}/>}>
                  <Route path="/dash" element={<Dashboard/>}/>
              </Route>
              <Route path="/user" element={<UserForm/>}/>
              <Route path="/products" element={<Product/>}/>
          </Routes>
      </Router>
  );
}
export default App;
