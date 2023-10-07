// App.js
import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./_index.scss";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();
  return (
    // <BrowserRouter>
    <AnimatePresence mode="wait">
      <Layout>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </AnimatePresence>
    // </BrowserRouter>
  );
};

export default App;
