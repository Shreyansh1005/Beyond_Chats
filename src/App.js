import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import SetupOrganisation from "./pages/SetupOrganisation";
import ChatbotIntegration from "./pages/ChatbotIntegration";
import CompanyWebsite from "./pages/CompanyWebsite.jsx"; // ✅ Import CompanyWebsite
import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <div className="app">
      {/* Conditionally render Navbar only if user is authenticated and not on register/login */}
      {isAuthenticated && !["/login", "/register", "/company-website"].includes(location.pathname) && <Navbar />}

      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/register" />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/setup"
            element={isAuthenticated ? <SetupOrganisation /> : <Navigate to="/login" />}
          />
          <Route
            path="/chatbot-integration"
            element={isAuthenticated ? <ChatbotIntegration /> : <Navigate to="/login" />}
          />
          {/* ✅ Fixed Import: Now `CompanyWebsite` is correctly used */}
          <Route
            path="/company-website"
            element={isAuthenticated ? <CompanyWebsite /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
