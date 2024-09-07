import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import "../index.css";
import Home from "../pages/home";
import Confirm from "../pages/confirm";
import AdminLogin from "../pages/adminlog";
import PrivateRoute from "./PrivateRoute";
import AdminDashboard from "../pages/admin";
import AdminOrder from "../pages/adminorder";

function RouterSetup() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/qualify" element={<Home />}/>
        <Route path="/confirmation" element={<Confirm />}/>
        <Route path="/okvcvdsdv3wfdzx" element={<AdminLogin />} />
        <Route path="/orders/:id" element={
            <PrivateRoute>
              <AdminOrder />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/dashboard"
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default RouterSetup;
