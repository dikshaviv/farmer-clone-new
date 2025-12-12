import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetail from "./pages/ServiceDetail";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

// ✅ NEW IMPORT ADDED
import Template from "./pages/Template";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/service/:id" element={<ServiceDetail />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* ✅ NEW ROUTE ADDED FOR GET TEMPLATE PAGE */}
          <Route path="/template" element={<Template />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
