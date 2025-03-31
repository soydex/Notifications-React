import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css' // Supprimé car global.css est utilisé
import HomePage from "./pages/HomePage";
import "./styles/global.css"; // Assure-toi d’avoir le CSS global (inclut Tailwind)
import "./styles/global.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <HomePage />
  </StrictMode>,
)