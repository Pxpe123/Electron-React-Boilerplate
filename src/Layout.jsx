import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./Layout.css";

import "./vars.css";

const Layout = () => {
  useEffect(() => {
    document.body.classList.add("dark-mode", "accent-red");

    return () => {
      document.body.classList.remove("dark-mode", "accent-white");
    };
  }, []);
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <div className="App-Holder">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default Layout;
