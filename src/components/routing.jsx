import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import "../index.css";
import Home from "../pages/home";

function RouterSetup() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/qualify" element={<Home />}/>
      </Routes>
    </Router>
  );
}

export default RouterSetup;
