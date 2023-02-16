import React from "react";
import Home from './components/home';
import About from './components/about';
import Map from './components/map';
import Login from './components/login';
import Register from "./components/register";
import Error from "./components/error";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}>
          
        </Route>
        <Route exact path="/about" element={<About />}>
          
        </Route>
        <Route exact path="/map" element={<Map />}>
          
        </Route>
        <Route exact path="/login" element={<Login />}>
          
        </Route>
        <Route exact path="/register" element={<Register />}>
          
        </Route>
        <Route exact path="*" element={<Error />}>
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

