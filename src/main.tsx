import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TestNotifications from './Notifications.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TestNotifications />
  </StrictMode>,
)
