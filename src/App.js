import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Error from "./Pages/404page";
import Protected from "./Components/Protected";
import Addproduct from "./Pages/Addproduct";

function App() {
  return (
    
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/signin" element={<Protected component={Login} />} />
          <Route path="/" element={<Protected component={Dashboard} />} />
          <Route path="/add" element={<Protected component={Addproduct} />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;