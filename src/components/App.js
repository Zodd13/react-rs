import Register from "./Register";
import Login from "./Login";
import { Routes, Route } from "react-router";
import Home from "./Home";
import Navbar from "./Navbar";
import { hasAuthenticated } from "../services/AuthApi.js";
import Auth from "../contexts/Auth";
import { useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated());
  return (
    <Auth.Provider value={{ isAuthenticated }}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/connexion" element={<Login />} />
          <Route path="/account" element={<Home />} />
        </Routes>
      </div>
    </Auth.Provider>
  );
}

export default App;
