import Signin from "./Signin";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DashboardOverview from "./dashboard/DashboardOverview";
import "../css/App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { routes } from "../routes";

function App() {
  return (
    <Routes>
      <Route exact path={routes.SIGN_IN.path} element={<Signin />} />
      <Route exact path="/" element={<DashboardOverview />} />
    </Routes>
  );
}

export default App;
