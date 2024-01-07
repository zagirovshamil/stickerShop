import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage, ProductPage } from "./components";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </Router>
  );
};
