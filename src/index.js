import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserCard from "./pages/UserCard"; // import UserCard page (create this component if needed)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home route */}
        <Route path="/user" element={<UserCard />} /> {/* UserCard route */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);