import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import "../index.css";
import Clients from "../pages/clients";
import Contact from "../pages/contact";
import Thankyou from "../pages/thanks";
import BlogUsers from "../pages/blogs";

function RouterSetup() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thank-you" element={<Thankyou />} />
        <Route path="/news" element={<BlogUsers />} />
      </Routes>
    </Router>
  );
}

export default RouterSetup;
