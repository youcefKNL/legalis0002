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

const App = () => {
  const location = useLocation();
  return (
    // <BrowserRouter>
    <Layout>
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
              // <Transition>
              <Services />
              // {/* </Transition> */}
            }
          />
        </Routes>
      </AnimatePresence>
    </Layout>
    // </BrowserRouter>
  );
};

export default App;
