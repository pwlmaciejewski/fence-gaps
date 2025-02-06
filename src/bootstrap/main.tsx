import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import GapCalculatorPage from "../gap-calculator/pages/GapCalculatorPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GapCalculatorPage />
  </StrictMode>
);
