import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Navbar from "./components/Navbar";
import injectContext from "./store/appContext";
import Character from "./views/Character";
import Planet from "./views/Planet";
import Vehicle from "./views/Vehicle";

function App() {
  return (
    <div className="bg-dark">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character-detail" element={<Character />} />
          <Route path="/planet-detail" element={<Planet />} />
          <Route path="/vehicle-detail" element={<Vehicle />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default injectContext(App);
