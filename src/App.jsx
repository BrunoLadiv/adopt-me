import { useState } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import SearchParams from "./Components/SearchParams";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Details from "./pages/Details";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AdoptedPetContext from "./Context/AdoptedPet";
import "./styles.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});
const App = () => {
  const adoptedPet = useState(null);
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AdoptedPetContext.Provider value={adoptedPet}>
          <header>
            <Link to={"/"}> Adopt Me! </Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </AdoptedPetContext.Provider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

const root = document.getElementById("root");

createRoot(root).render(<App />);
