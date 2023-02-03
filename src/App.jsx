import React from "react";
import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./pages/Details";

const App = () => {
  return (
    <BrowserRouter>
      <h1>Adopt Me</h1>
      <Routes>
        <Route path="/details/:id" element={<Details />} />
        <Route path="/" element={<SearchParams />} />
      </Routes>
    </BrowserRouter>
  );
};

const root = document.getElementById("root");

createRoot(root).render(<App />);
