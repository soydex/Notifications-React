import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from "./pages/HomePage";
import Sidebar from "./components/Sidebar"; // Nouveau composant
import "./styles/global.css"; // Assure-toi d’avoir le CSS global (inclut Tailwind)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="flex">
      <Sidebar />
      <HomePage />
    </div>
  </StrictMode>,
)