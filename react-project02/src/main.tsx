import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'      // Global styles load FIRST
import App from './App.tsx'  // Your main app loads SECOND

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />  {/* Your entire app lives here */}
  </StrictMode>,
)