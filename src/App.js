// App.js
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./_index.scss";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";

import { AnimatePresence } from "framer-motion";
import Transition from "./components/Transition";
import Project from "./pages/Project";
import ParticlesContainer from "./components/ParticlesContainer";

const App = () => {
  const location = useLocation();
  return (
    // <BrowserRouter>
    <Layout>
      <ParticlesContainer />

      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route
            path="/"
            element={
              <Transition>
                <Home />
              </Transition>
            }
          />
          <Route
            path="/about"
            element={
              <Transition>
                <About />
              </Transition>
            }
          />
          <Route
            path="/services"
            element={
              <Transition>
                <Services />
              </Transition>
            }
          />
          <Route
            path="/projet"
            element={
              <Transition>
                <Project />
              </Transition>
            }
          />
        </Routes>
      </AnimatePresence>
    </Layout>
    // </BrowserRouter>
  );
};

export default App;
