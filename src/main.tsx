import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.tsx";
import About from "./pages/About.tsx";
import Nurturly from "./pages/Nurturly.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/nurturly" element={<Nurturly />} />
    </Routes>
  </BrowserRouter>
);
